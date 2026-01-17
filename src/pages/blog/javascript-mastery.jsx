import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Header from "@/components/common/header";
import Contact from "@/components/contact";
import TextContainer from "@/components/common/TextContainer";
import { wordsContainerNoDelay } from "@/utils/AnimationVarients";
import CodeBlock from "@/components/blog/CodeBlock";

const JavaScriptMastery = () => {
    return (
        <>
            <Head>
                <title>JavaScript Zero to Hero: The Complete Guide - Bibek Shah</title>
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
                            <TextContainer text="JavaScript Zero to Hero: The Complete Guide" />
                        </h1>

                        <div className="flex justify-center items-center gap-4 text-textDim mb-12">
                            <span className="px-3 py-1 bg-yellow-500/10 text-yellow-500 text-xs rounded-full border border-yellow-500/20 font-bold">JavaScript</span>
                            <span>Jan 16, 2026</span>
                            <span>35 min read</span>
                        </div>

                        <div className="prose prose-invert prose-lg max-w-none">
                            <p className="text-textDim text-xl mb-12 leading-relaxed">
                                JavaScript is the backbone of the modern web. From interactive websites to full-stack applications, JavaScript is everywhere. This JavaScript Zero to Hero guide is designed to take you from absolute beginner to confident JavaScript developer, step by step.
                            </p>

                            <section className="mb-12 p-8 bg-backgroundSecondary rounded-2xl border border-backgroundLight">
                                <h2 className="text-2xl font-bold mb-6 text-primary">Table of Contents</h2>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-yellow-500 list-none pl-0">
                                    <li><a href="#intro" className="hover:underline">1. What is JavaScript?</a></li>
                                    <li><a href="#setup" className="hover:underline">2. JavaScript Setup</a></li>
                                    <li><a href="#basics" className="hover:underline">3. JavaScript Basics</a></li>
                                    <li><a href="#core" className="hover:underline">4. Core Concepts</a></li>
                                    <li><a href="#intermediate" className="hover:underline">5. Intermediate JavaScript</a></li>
                                    <li><a href="#dom" className="hover:underline">6. JavaScript in the Browser (DOM)</a></li>
                                    <li><a href="#async" className="hover:underline">7. Asynchronous JavaScript</a></li>
                                    <li><a href="#modern" className="hover:underline">8. Modern JavaScript (ES6+)</a></li>
                                    <li><a href="#error" className="hover:underline">9. Error Handling</a></li>
                                </ul>
                            </section>

                            <section id="intro" className="mb-16">
                                <h2 className="text-3xl font-bold mb-6 text-primary border-l-4 border-yellow-500 pl-4">1. What is JavaScript?</h2>
                                <p className="text-textDim mb-8 leading-relaxed">
                                    JavaScript is a high-level, interpreted programming language used to make web pages interactive. It is the lifeblood of modern web development and a must-know for any aspiring developer.
                                </p>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {[
                                        { title: "Web Apps", desc: "React, Next.js, Vue" },
                                        { title: "Backend", desc: "Node.js, Express" },
                                        { title: "Mobile", desc: "React Native" },
                                        { title: "Desktop", desc: "Electron" },
                                        { title: "Games", desc: "Phaser, Three.js" },
                                        { title: "Automation", desc: "Playwright, MCP" },
                                    ].map((item, idx) => (
                                        <div key={idx} className="bg-yellow-500/5 p-4 rounded-xl border border-yellow-500/10 hover:border-yellow-500/30 transition-colors group">
                                            <h4 className="font-bold text-yellow-500 text-sm mb-1">{item.title}</h4>
                                            <p className="text-textDim text-[11px] font-karla">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section id="setup" className="mb-16">
                                <h2 className="text-3xl font-bold mb-6 text-primary border-l-4 border-yellow-500 pl-4">2. JavaScript Setup</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="bg-backgroundSecondary p-8 rounded-2xl border border-backgroundLight relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                                            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" /></svg>
                                        </div>
                                        <h4 className="font-bold mb-4 text-primary uppercase tracking-tighter text-xs">Essential Tools</h4>
                                        <ul className="list-disc pl-6 space-y-2 text-textDim text-sm font-karla">
                                            <li><span className="text-primary font-semibold">Web Browser:</span> Chrome or Firefox</li>
                                            <li><span className="text-primary font-semibold">Code Editor:</span> Visual Studio Code</li>
                                            <li><span className="text-primary font-semibold">Runtime:</span> Node.js v18+</li>
                                        </ul>
                                    </div>
                                    <div className="bg-backgroundSecondary p-8 rounded-2xl border border-backgroundLight relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                                            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" /></svg>
                                        </div>
                                        <h4 className="font-bold mb-4 text-primary uppercase tracking-tighter text-xs">Running Code</h4>
                                        <ul className="list-disc pl-6 space-y-2 text-textDim text-sm font-karla">
                                            <li>Browser Console (F12 &gt; Console)</li>
                                            <li>Embedded <code>&lt;script&gt;</code> tags</li>
                                            <li>Local execution via <code>node index.js</code></li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            <section id="basics" className="mb-16">
                                <h2 className="text-3xl font-bold mb-6 text-primary border-l-4 border-yellow-500 pl-4">3. JavaScript Basics</h2>

                                <h3 className="text-xl font-bold mb-4 text-secondary">Variables</h3>
                                <CodeBlock language="javascript" code={`let name = "John";\nconst age = 25;`} />
                                <ul className="list-disc pl-6 text-textDim mb-8">
                                    <li><code>let</code> → value can change</li>
                                    <li><code>const</code> → value cannot be reassigned</li>
                                </ul>

                                <h3 className="text-xl font-bold mb-4 text-secondary">Data Types</h3>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                                    {["String", "Number", "Boolean", "null", "undefined", "Object", "Array"].map(type => (
                                        <div key={type} className="p-3 bg-backgroundSecondary border border-backgroundLight rounded text-center text-sm">{type}</div>
                                    ))}
                                </div>
                                <CodeBlock language="javascript" code={`const user = {\n  name: "John",\n  age: 25\n};`} />

                                <h3 className="text-xl font-bold mb-4 mt-8 text-secondary">Operators</h3>
                                <CodeBlock language="javascript" code={`// Arithmetic: + - * / %\n// Comparison: === !== > < >= <=\n// Logical: && || !`} />
                                <p className="text-textDim italic bg-yellow-500/5 border border-yellow-500/10 p-3 rounded mt-2">✅ Always use <code>===</code> instead of <code>==</code></p>

                                <h3 className="text-xl font-bold mb-4 mt-8 text-secondary">Conditionals</h3>
                                <CodeBlock language="javascript" code={`if (age >= 18) {\n  console.log("Adult");\n} else {\n  console.log("Minor");\n}`} />
                            </section>

                            <section id="core" className="mb-16">
                                <h2 className="text-3xl font-bold mb-6 text-primary border-l-4 border-yellow-500 pl-4">4. Core JavaScript Concepts</h2>

                                <h3 className="text-xl font-bold mb-4 text-secondary">Loops</h3>
                                <CodeBlock language="javascript" code={`for (let i = 0; i < 5; i++) {\n  console.log(i);\n}`} />

                                <h3 className="text-xl font-bold mb-4 mt-8 text-secondary">Functions</h3>
                                <CodeBlock language="javascript" code={`function greet(name) {\n  return \`Hello \${name}\`;\n}\n\n// Arrow Function\nconst greetArrow = name => \`Hello \${name}\`;`} />

                                <h3 className="text-xl font-bold mb-4 mt-8 text-secondary">Arrays</h3>
                                <CodeBlock language="javascript" code={`const numbers = [1, 2, 3];\n\nnumbers.push(4);\nnumbers.map(n => n * 2);\nnumbers.filter(n => n > 1);\nnumbers.reduce((a, b) => a + b);`} />

                                <h3 className="text-xl font-bold mb-4 mt-8 text-secondary">Objects</h3>
                                <CodeBlock language="javascript" code={`const person = {\n  name: "John",\n  greet() {\n    console.log(this.name);\n  }\n};`} />
                            </section>

                            <section id="intermediate" className="mb-16">
                                <h2 className="text-3xl font-bold mb-6 text-primary border-l-4 border-yellow-500 pl-4">5. Intermediate JavaScript</h2>

                                <h3 className="text-xl font-bold mb-4 text-secondary">Scope</h3>
                                <CodeBlock language="javascript" code={`let globalVar = "Global";\n\nfunction test() {\n  let localVar = "Local";\n}`} />

                                <h3 className="text-xl font-bold mb-4 mt-8 text-secondary">Closures</h3>
                                <CodeBlock language="javascript" code={`function counter() {\n  let count = 0;\n  return function () {\n    count++;\n    return count;\n  };\n}`} />

                                <h3 className="text-xl font-bold mb-4 mt-8 text-secondary">The <code>this</code> Keyword</h3>
                                <CodeBlock language="javascript" code={`const obj = {\n  name: "JS",\n  show() {\n    console.log(this.name);\n  }\n};`} />
                            </section>

                            <section id="dom" className="mb-16">
                                <h2 className="text-3xl font-bold mb-6 text-primary border-l-4 border-yellow-500 pl-4">6. JavaScript in the Browser (DOM)</h2>

                                <h3 className="text-xl font-bold mb-4 text-secondary">Selecting Elements</h3>
                                <CodeBlock language="javascript" code={`document.getElementById("id");\ndocument.querySelector(".class");`} />

                                <h3 className="text-xl font-bold mb-4 mt-8 text-secondary">Events</h3>
                                <CodeBlock language="javascript" code={`button.addEventListener("click", () => {\n  alert("Button clicked");\n});`} />

                                <h3 className="text-xl font-bold mb-4 mt-8 text-secondary">DOM Manipulation</h3>
                                <CodeBlock language="javascript" code={`element.textContent = "Hello World";\nelement.style.color = "red";`} />
                            </section>

                            <section id="async" className="mb-16">
                                <h2 className="text-3xl font-bold mb-6 text-primary border-l-4 border-yellow-500 pl-4">7. Asynchronous JavaScript</h2>

                                <h3 className="text-xl font-bold mb-4 text-secondary">Callbacks</h3>
                                <CodeBlock language="javascript" code={`setTimeout(() => {\n  console.log("Executed later");\n}, 1000);`} />

                                <h3 className="text-xl font-bold mb-4 mt-8 text-secondary">Promises</h3>
                                <CodeBlock language="javascript" code={`const promise = new Promise((resolve, reject) => {\n  resolve("Success");\n});`} />

                                <h3 className="text-xl font-bold mb-4 mt-8 text-secondary">Async / Await</h3>
                                <CodeBlock language="javascript" code={`async function fetchData() {\n  const res = await fetch(url);\n  const data = await res.json();\n}`} />
                                <p className="text-textDim italic mt-2 text-sm text-yellow-500 border border-yellow-500/20 p-2 rounded">🔥 One of the most important JavaScript concepts</p>
                            </section>

                            <section id="modern" className="mb-16">
                                <h2 className="text-3xl font-bold mb-6 text-primary border-l-4 border-yellow-500 pl-4">8. Modern JavaScript (ES6+)</h2>

                                <h3 className="text-xl font-bold mb-4 text-secondary">Destructuring</h3>
                                <CodeBlock language="javascript" code={`const { name } = user;`} />

                                <h3 className="text-xl font-bold mb-4 mt-8 text-secondary">Spread Operator</h3>
                                <CodeBlock language="javascript" code={`const newArray = [...oldArray];`} />

                                <h3 className="text-xl font-bold mb-4 mt-8 text-secondary">Modules</h3>
                                <CodeBlock language="javascript" code={`export default function greet() {}\nimport greet from "./greet.js";`} />
                            </section>

                            <section id="error" className="mb-16">
                                <h2 className="text-3xl font-bold mb-6 text-primary border-l-4 border-yellow-500 pl-4">9. Error Handling</h2>
                                <CodeBlock language="javascript" code={`try {\n  riskyCode();\n} catch (error) {\n  console.error(error);\n}`} />
                            </section>

                            <section className="mt-20 p-10 bg-backgroundSecondary rounded-3xl border border-backgroundLight">
                                <h2 className="text-3xl font-bold mb-6 text-primary">What to Learn After JavaScript?</h2>
                                <p className="text-textDim text-lg leading-relaxed mb-6">
                                    Once you are comfortable with the core concepts, you can dive into specialized areas:
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="p-4 border border-backgroundLight rounded-xl">
                                        <h5 className="font-bold text-yellow-500 mb-2">Frontend Frameworks</h5>
                                        <p className="text-sm text-textDim">React, Vue, or Angular for building complex UIs.</p>
                                    </div>
                                    <div className="p-4 border border-backgroundLight rounded-xl">
                                        <h5 className="font-bold text-yellow-500 mb-2">Backend Development</h5>
                                        <p className="text-sm text-textDim">Node.js and Express for building scaling servers.</p>
                                    </div>
                                    <div className="p-4 border border-backgroundLight rounded-xl">
                                        <h5 className="font-bold text-yellow-500 mb-2">TypeScript</h5>
                                        <p className="text-sm text-textDim">Static typing to make your JS projects more maintainable.</p>
                                    </div>
                                    <div className="p-4 border border-backgroundLight rounded-xl">
                                        <h5 className="font-bold text-yellow-500 mb-2">Mobile Apps</h5>
                                        <p className="text-sm text-textDim">React Native or Ionic for cross-platform app development.</p>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </motion.div>
                </article>

                <Contact />
            </main>
        </>
    );
};

export default JavaScriptMastery;
