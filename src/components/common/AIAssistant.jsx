import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiSend } from 'react-icons/fi';
import { RiRobot2Line, RiRobot2Fill } from 'react-icons/ri';
import { useTheme } from '../../utils/ThemeContext';

const AIAssistant = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'assistant', content: 'Hi! I\'m Bibek\'s AI. Ask me anything about his work or skills.' }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef(null);
    const { theme } = useTheme();

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage = { role: 'user', content: input };
        setMessages((prev) => [...prev, userMessage]);
        setInput('');
        setIsTyping(true);

        // AI Response Logic
        setTimeout(() => {
            const lowerInput = input.toLowerCase().trim();
            let aiResponse = "I'm mostly trained on Bibek's professional info. Try asking about his projects, skills, or contact info!";

            const knowledgeBase = {
                identity: ['who are you', 'tell me about yourself', 'bibek shah', 'who is bibek'],
                skills: ['skill', 'tech', 'stack', 'what can you do', 'programming'],
                experience: ['experience', 'work', 'job', 'portpro', 'sunya tech', 'intern'],
                education: ['education', 'college', 'school', 'university', 'study', 'ismt'],
                projects: ['project', 'build', 'create', 'portfolio', 'ecommerce'],
                contact: ['contact', 'email', 'phone', 'reach', 'whatsapp', 'gmail', 'mail', 'number'],
                location: ['where', 'location', 'live', 'kathmandu', 'nepal', 'from'],
                blogs: ['blog', 'article', 'write', 'lambda', 'aws', 'cloud', 'git', 'github', 'cmd', 'command', 'playwright', 'mcp', 'automation', 'linux', 'terminal', 'cli'],
                certifications: ["cert", "training", "aws", "ccna", "rhcsa"],
                greetings: ["hi", "hello", "hey", "hola", "namaste"]
            };

            if (knowledgeBase.greetings.some(k => lowerInput.includes(k))) {
                aiResponse = "Hi there! I can help with info about Bibek's projects, stack, or how to contact him.";
            } else if (knowledgeBase.identity.some(k => lowerInput.includes(k))) {
                aiResponse = "Bibek is a MERN Stack Developer from Kathmandu, Nepal, focused on building scalable web apps.";
            } else if (knowledgeBase.contact.some(k => lowerInput.includes(k))) {
                aiResponse = "You can email him at bibekshah425@gmail.com or WhatsApp +977 9847306600.";
            } else if (knowledgeBase.location.some(k => lowerInput.includes(k))) {
                aiResponse = "He's based in Kathmandu, Nepal.";
            } else if (knowledgeBase.skills.some(k => lowerInput.includes(k))) {
                aiResponse = "Core stack: MERN (MongoDB, Express, React, Node.js). He also knows Python, TypeScript, AWS, and Docker.";
            } else if (knowledgeBase.experience.some(k => lowerInput.includes(k))) {
                aiResponse = "He's a Software Engineer at Portpro (Ship Management). Previously a Full Stack Intern at Sunya Tech.";
            } else if (knowledgeBase.education.some(k => lowerInput.includes(k))) {
                aiResponse = "He's pursuing a BSc (Hons) in Computing at ISMT College (2022-2025).";
            } else if (knowledgeBase.projects.some(k => lowerInput.includes(k))) {
                aiResponse = "Notable projects: Full-featured E-Commerce Platform, Product Hunt Clone, and an AI SQL Agent.";
            } else if (knowledgeBase.blogs.some(k => lowerInput.includes(k))) {
                aiResponse = "He writes about JS, Playwright, Linux, and AWS. Check out the Blog section!";
            } else if (knowledgeBase.certifications.some(k => lowerInput.includes(k))) {
                aiResponse = "He's certified in AWS Solutions Architect, CCNA, and RHCSA.";
            }

            setMessages((prev) => [...prev, { role: 'assistant', content: aiResponse }]);
            setIsTyping(false);
        }, 1000);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="mb-4 w-80 sm:w-96 h-[450px] bg-backgroundSecondary border border-backgroundLight rounded-2xl shadow-2xl flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-4 bg-primary flex justify-between items-center shadow-lg">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-background/20 flex items-center justify-center text-background">
                                    <RiRobot2Line size={20} />
                                </div>
                                <span className="font-prompt font-bold text-background">Bibek&apos;s AI Assistant</span>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-background hover:rotate-90 duration-300 transition-all">
                                <FiX size={20} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto scrollbar space-y-4 bg-background">
                            {messages.map((msg, i) => (
                                <div key={i} className={`flex items-end gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    {msg.role === 'assistant' && (
                                        <div className="w-8 h-8 rounded-full bg-primary flex-shrink-0 flex items-center justify-center text-background mb-1">
                                            <RiRobot2Fill size={16} />
                                        </div>
                                    )}
                                    <div className={`max-w-[75%] p-3 rounded-2xl text-sm font-karla shadow-sm ${msg.role === 'user'
                                        ? 'bg-primary text-background rounded-tr-none'
                                        : 'bg-backgroundSecondary text-primary border border-backgroundLight rounded-tl-none'
                                        }`}>
                                        {msg.content}
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex items-end gap-2 justify-start">
                                    <div className="w-8 h-8 rounded-full bg-primary flex-shrink-0 flex items-center justify-center text-background mb-1 animate-bounce">
                                        <RiRobot2Fill size={16} />
                                    </div>
                                    <div className="bg-backgroundSecondary text-primary border border-backgroundLight p-3 rounded-2xl rounded-tl-none text-xs flex gap-1 items-center italic">
                                        <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
                                        <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse delay-75"></span>
                                        <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse delay-150"></span>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Input */}
                        <div className="p-4 bg-backgroundSecondary border-t border-backgroundLight flex gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                placeholder="Ask me anything..."
                                className="flex-1 bg-background border border-backgroundLight text-primary rounded-full px-4 py-2 text-sm focus:outline-none focus:border-primary transition-colors"
                            />
                            <button
                                onClick={handleSend}
                                className="p-2 bg-primary text-background rounded-full hover:opacity-90 transition-opacity"
                            >
                                <FiSend size={18} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="w-14 h-14 bg-primary text-background rounded-full shadow-2xl flex items-center justify-center hover:shadow-primary/20 transition-all"
            >
                {isOpen ? <FiX size={24} /> : <RiRobot2Line size={28} />}
            </motion.button>
        </div>
    );
};

export default AIAssistant;
