import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Header from "@/components/common/header";
import Contact from "@/components/contact";
import TextContainer from "@/components/common/TextContainer";
import { wordsContainerNoDelay } from "@/utils/AnimationVarients";
import CodeBlock from "@/components/blog/CodeBlock";

const PlaywrightMCPGuide = () => {
    return (
        <>
            <Head>
                <title>MCP + Playwright: Complete Guide - Bibek Shah</title>
            </Head>
            <main className="bg-background min-h-screen">
                <Header />

                <article className="main-container pt-[10rem] pb-[6rem] px-[1.5rem] text-primary">
                    <motion.div
                        variants={wordsContainerNoDelay}
                        initial="hidden"
                        animate="visible"
                        className="max-w-4xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-center">
                            <TextContainer text="MCP + Playwright: Complete Guide" />
                        </h1>

                        <div className="flex justify-center items-center gap-4 text-textDim mb-12">
                            <span className="px-3 py-1 bg-blue-500/10 text-blue-500 text-xs rounded-full border border-blue-500/20 font-bold">Automation</span>
                            <span>Jan 16, 2026</span>
                            <span>15 min read</span>
                        </div>

                        <div className="prose prose-invert prose-lg max-w-none">
                            <p className="text-textDim text-xl mb-12 leading-relaxed">
                                AI agents are becoming more powerful, but they need a safe and structured way to interact with the real world—especially web browsers. This is where MCP (Model Context Protocol) combined with Playwright comes in.
                            </p>

                            <section className="mb-12 p-8 bg-backgroundSecondary rounded-2xl border border-backgroundLight">
                                <h2 className="text-2xl font-bold mb-6 text-primary">In this blog, you’ll learn:</h2>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-blue-400 list-disc pl-6">
                                    <li>What MCP is</li>
                                    <li>What Playwright is</li>
                                    <li>Why they work perfectly together</li>
                                    <li>How to build an MCP Playwright server</li>
                                    <li>Line-by-line code explanation</li>
                                </ul>
                            </section>

                            <section className="mb-16">
                                <h2 className="text-3xl font-bold mb-6 text-primary border-l-4 border-blue-500 pl-4">1. What is MCP (Model Context Protocol)?</h2>
                                <p className="text-textDim mb-6">
                                    MCP is a protocol that allows AI models to call tools, use external services, receive structured responses, and operate securely. Think of MCP as a bridge between AI models and real-world tools like browsers, files, and APIs.
                                </p>
                            </section>

                            <section className="mb-16">
                                <h2 className="text-3xl font-bold mb-6 text-primary border-l-4 border-blue-500 pl-4">2. What is Playwright?</h2>
                                <p className="text-textDim mb-6">
                                    Playwright is a browser automation library created by Microsoft. It allows you to open websites, click buttons, fill forms, take screenshots, and scrape content across Chromium, Firefox, and WebKit.
                                </p>
                            </section>

                            <section className="mb-16">
                                <h2 className="text-3xl font-bold mb-6 text-primary border-l-4 border-blue-500 pl-4">3. Why Use MCP with Playwright?</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                    <div className="bg-red-500/5 p-6 rounded-xl border border-red-500/10">
                                        <h4 className="font-bold mb-3 text-red-500">Without MCP</h4>
                                        <ul className="list-disc pl-6 space-y-1 text-textDim text-sm">
                                            <li>AI automation is unsafe</li>
                                            <li>No standard tool interface</li>
                                            <li>Hard to control permissions</li>
                                        </ul>
                                    </div>
                                    <div className="bg-green-500/5 p-6 rounded-xl border border-green-500/10">
                                        <h4 className="font-bold mb-3 text-green-500">With MCP + Playwright</h4>
                                        <ul className="list-disc pl-6 space-y-1 text-textDim text-sm">
                                            <li>Secure browser automation</li>
                                            <li>Standardized tool interface</li>
                                            <li>Works with any AI model</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            <section className="mb-16">
                                <h2 className="text-3xl font-bold mb-6 text-primary border-l-4 border-blue-500 pl-4">4. Step-by-Step Implementation</h2>

                                <h3 className="text-xl font-bold mb-4 text-secondary">Step 1: Project Setup</h3>
                                <CodeBlock language="bash" code={`$ mkdir mcp-playwright\n$ cd mcp-playwright\n$ npm init -y`} />

                                <h3 className="text-xl font-bold mb-4 mt-8 text-secondary">Step 2: Install Dependencies</h3>
                                <CodeBlock language="bash" code={`$ npm install @modelcontextprotocol/sdk playwright\n$ npx playwright install`} />

                                <h3 className="text-xl font-bold mb-4 mt-8 text-secondary">Step 3: Basic MCP Server Setup</h3>
                                <p className="text-textDim mb-4">Create a file called <code>index.js</code> and add the following:</p>
                                <CodeBlock language="javascript" code={`import { Server } from "@modelcontextprotocol/sdk/server/index.js";\nimport { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";\nimport { chromium } from "playwright";\n\nconst server = new Server(\n  {\n    name: "mcp-playwright-server",\n    version: "1.0.0",\n  },\n  {\n    capabilities: {\n      tools: {},\n    },\n  }\n);`} />
                            </section>

                            <section className="mb-16">
                                <h2 className="text-3xl font-bold mb-6 text-primary border-l-4 border-blue-500 pl-4">5. Creating Tools</h2>

                                <h3 className="text-xl font-bold mb-4 text-secondary">Tool: Open a Web Page</h3>
                                <CodeBlock language="javascript" code={`server.tool(\n  "open_page",\n  {\n    url: { type: "string" },\n  },\n  async ({ url }) => {\n    const browser = await chromium.launch({ headless: true });\n    const page = await browser.newPage();\n\n    await page.goto(url);\n    const title = await page.title();\n\n    await browser.close();\n\n    return {\n      content: [{ type: "text", text: \`Page title: \${title}\` }],\n    };\n  }\n);`} />

                                <h3 className="text-xl font-bold mb-4 mt-8 text-secondary">Tool: Take Screenshot</h3>
                                <CodeBlock language="javascript" code={`server.tool(\n  "take_screenshot",\n  {\n    url: { type: "string" },\n  },\n  async ({ url }) => {\n    const browser = await chromium.launch({ headless: true });\n    const page = await browser.newPage();\n\n    await page.goto(url);\n    await page.screenshot({ path: "screenshot.png" });\n\n    await browser.close();\n\n    return {\n      content: [{ type: "text", text: "Screenshot saved successfully" }],\n    };\n  }\n);`} />
                            </section>

                            <section className="mb-16">
                                <h2 className="text-3xl font-bold mb-6 text-primary border-l-4 border-blue-500 pl-4">6. Running the Server</h2>
                                <CodeBlock language="javascript" code={`const transport = new StdioServerTransport();\nawait server.connect(transport);\n\n// Run with:\n// node index.js`} />
                            </section>

                            <section className="mt-20 p-10 bg-backgroundSecondary rounded-3xl border border-backgroundLight relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl font-bold italic text-blue-500">MCP</div>
                                <h2 className="text-3xl font-bold mb-6 text-primary">Conclusion</h2>
                                <p className="text-textDim text-lg leading-relaxed">
                                    MCP + Playwright is a game-changer for AI-driven automation. By giving LLMs direct access to the web, we move from simple text generation to actual task execution. Secure, structured, and powerful—this is the future of AI agents.
                                </p>
                            </section>
                        </div>
                    </motion.div>
                </article>

                <Contact />
            </main>
        </>
    );
};

export default PlaywrightMCPGuide;
