import Groq from "groq-sdk";
import nodemailer from "nodemailer";

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
});

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

const tools = [
    {
        type: "function",
        function: {
            name: "send_email_to_bibek",
            description: "Send an email notification to Bibek when a visitor wants to connect or leave a message.",
            parameters: {
                type: "object",
                properties: {
                    visitor_name: {
                        type: "string",
                        description: "The name of the visitor.",
                    },
                    visitor_email: {
                        type: "string",
                        description: "The email address of the visitor.",
                    },
                    message: {
                        type: "string",
                        description: "The message the visitor wants to leave.",
                    },
                    visitor_phone: {
                        type: "string",
                        description: "The phone number of the visitor (optional).",
                    },
                },
                required: ["visitor_name", "visitor_email", "message"],
            },
        },
    },
    {
        type: "function",
        function: {
            name: "book_meeting",
            description: "Provide the user with Bibek's meeting booking link. Call this immediately when a user mentions wanting to meet, schedule, book, or have a call with Bibek. Do NOT ask for any details first.",
            parameters: {
                type: "object",
                properties: {},
                required: [],
            },
        },
    },
];

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method Not Allowed" });
    }

    const { message } = req.body;

    if (!message) {
        return res.status(400).json({ message: "Message is required" });
    }

    const BOOKING_URL = "https://calendar.app.google/NN7pH8gw1aez8TFP8";

    const messages = [
        {
            role: "system",
            content: `You are Bibek's AI Assistant.
            
            **Bibek's Profile:**
            - **Role:** Full Stack Developer (MERN)
            - **Location:** Kathmandu, Nepal
            - **Contact:** bibekshah425@gmail.com | +977 9847306600
            
            **Capabilities:**
            1. **Answer Questions:** About Bibek's skills, projects, and experience.
            2. **Book Meetings:** 
               - When a user wants to book/schedule a meeting or call, IMMEDIATELY call the \`book_meeting\` tool.
               - Do NOT ask for name, email, phone, or time. The booking page handles all of that.
               - Just call the tool right away and share the link.
            3. **Connect/Leave Message:** Ask for **Name**, **Email**, **Phone**, and **Message**. Then use \`send_email_to_bibek\`.
            
            **Guidelines:**
            - Be friendly and helpful.
            - For meetings: respond instantly with the booking link. Never ask for details first.
            - For messages: collect details, then send email.
            `,
        },
        {
            role: "user",
            content: message,
        },
    ];

    console.log("Incoming message:", message);

    try {
        console.log("Calling Groq API...");
        const completion = await groq.chat.completions.create({
            messages: messages,
            model: "llama-3.3-70b-versatile",
            tools: tools,
            tool_choice: "auto",
        });

        const toolCall = completion.choices[0]?.message?.tool_calls?.[0];
        console.log("Tool call detected:", toolCall ? toolCall.function.name : "none");

        if (toolCall) {
            const toolName = toolCall.function.name;
            const toolArgs = JSON.parse(toolCall.function.arguments);

            if (toolName === "send_email_to_bibek") {
                try {
                    await transporter.sendMail({
                        from: process.env.EMAIL_USER,
                        to: "bibekshah425@gmail.com",
                        subject: `New Portfolio Message from ${toolArgs.visitor_name}`,
                        text: `
Name: ${toolArgs.visitor_name}
Email: ${toolArgs.visitor_email}
Phone: ${toolArgs.visitor_phone || "N/A"}

Message:
${toolArgs.message}
                        `,
                    });

                    messages.push(completion.choices[0].message);
                    messages.push({
                        role: "tool",
                        tool_call_id: toolCall.id,
                        content: "Email sent successfully to Bibek.",
                    });

                    const successCompletion = await groq.chat.completions.create({
                        messages: messages,
                        model: "llama-3.3-70b-versatile",
                    });

                    return res.status(200).json({ response: successCompletion.choices[0].message.content });

                } catch (emailError) {
                    console.error("Email Error:", emailError);
                    return res.status(200).json({ response: "I tried to email Bibek, but there was a system error. Please try emailing him directly at bibekshah425@gmail.com." });
                }
            }

            if (toolName === "book_meeting") {
                messages.push(completion.choices[0].message);
                messages.push({
                    role: "tool",
                    tool_call_id: toolCall.id,
                    content: `Meeting booking link provided to the user. The booking link is: ${BOOKING_URL}. Let them know they can use this link to schedule a meeting directly with Bibek.`,
                });

                const successCompletion = await groq.chat.completions.create({
                    messages: messages,
                    model: "llama-3.3-70b-versatile",
                });

                return res.status(200).json({ response: successCompletion.choices[0].message.content });
            }
        }

        const aiResponse = completion.choices[0]?.message?.content || "I'm sorry, I couldn't process that.";
        res.status(200).json({ response: aiResponse });

    } catch (error) {
        console.error("Groq API Error Detail:", error);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
}
