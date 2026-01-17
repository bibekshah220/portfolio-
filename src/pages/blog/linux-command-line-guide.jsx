import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Header from "@/components/common/header";
import Contact from "@/components/contact";
import TextContainer from "@/components/common/TextContainer";
import { wordsContainerNoDelay } from "@/utils/AnimationVarients";
import CodeBlock from "@/components/blog/CodeBlock";

const LinuxCommandGuide = () => {
    return (
        <>
            <Head>
                <title>Linux Command Line: The Complete Guide - Bibek Shah</title>
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
                            <TextContainer text="Linux Command Line: The Complete Mastery Guide" />
                        </h1>

                        <div className="flex justify-center items-center gap-4 text-textDim mb-12">
                            <span className="px-3 py-1 bg-green-500/10 text-green-500 text-xs rounded-full border border-green-500/20 font-bold">Linux</span>
                            <span>Jan 16, 2026</span>
                            <span>30 min read</span>
                        </div>

                        <div className="prose prose-invert prose-lg max-w-none">
                            <p className="text-textDim text-xl mb-12 leading-relaxed">
                                The Linux command line (Terminal) is one of the most powerful tools in computing. Whether you are a developer, system administrator, DevOps engineer, or ethical hacker, mastering Linux commands is essential. This guide covers everything you need, from basic commands to advanced system management.
                            </p>

                            <section className="mb-12 p-8 bg-backgroundSecondary rounded-2xl border border-backgroundLight">
                                <h2 className="text-2xl font-bold mb-6 text-primary">Table of Contents</h2>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-green-500 list-none pl-0">
                                    <li><a href="#intro" className="hover:underline">1. What is Linux CLI?</a></li>
                                    <li><a href="#basics" className="hover:underline">2. Terminal Basics</a></li>
                                    <li><a href="#files" className="hover:underline">3. File & Directory Commands</a></li>
                                    <li><a href="#viewing" className="hover:underline">4. File Viewing & Editing</a></li>
                                    <li><a href="#perms" className="hover:underline">5. Permissions & Ownership</a></li>
                                    <li><a href="#search" className="hover:underline">6. Search & Find</a></li>
                                    <li><a href="#network" className="hover:underline">8. Networking</a></li>
                                    <li><a href="#process" className="hover:underline">9. Process Management</a></li>
                                    <li><a href="#system" className="hover:underline">10. Disk & System Info</a></li>
                                    <li><a href="#packages" className="hover:underline">11. Package Management</a></li>
                                </ul>
                            </section>

                            <section id="intro" className="mb-16">
                                <h2 className="text-3xl font-bold mb-6 text-primary border-l-4 border-green-500 pl-4">1. What is the Linux Command Line?</h2>
                                <p className="text-textDim mb-8 leading-relaxed">
                                    The Linux Command Line (CLI) allows you to interact with the operating system using text-based commands instead of a graphical interface. It is the gold standard for performance, precision, and automation.
                                </p>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {[
                                        { title: "Speed", desc: "Outperform any GUI" },
                                        { title: "Automation", desc: "Bash & Shell Scripting" },
                                        { title: "Cloud", desc: "Standard for Server Mgmt" },
                                        { title: "Security", desc: "Granular System Control" },
                                    ].map((item, idx) => (
                                        <div key={idx} className="bg-green-500/5 p-4 rounded-xl border border-green-500/10 hover:border-green-500/30 transition-colors group">
                                            <h4 className="font-bold text-green-500 text-sm mb-1">{item.title}</h4>
                                            <p className="text-textDim text-[11px] font-karla">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section id="basics" className="mb-16">
                                <h2 className="text-3xl font-bold mb-6 text-primary border-l-4 border-green-500 pl-4">2. Terminal Basics</h2>
                                <p className="text-textDim mb-4">Command Structure:</p>
                                <CodeBlock language="bash" code="command [options] [arguments]" />
                                <p className="text-textDim mt-4">Example: List files in long format</p>
                                <CodeBlock language="bash" code="$ ls -l /home/user" />
                            </section>

                            <section id="files" className="mb-16">
                                <h2 className="text-3xl font-bold mb-6 text-primary border-l-4 border-green-500 pl-4">3. File & Directory Commands</h2>

                                <h3 className="text-xl font-bold mb-4 text-secondary">Navigation & Listing</h3>
                                <CodeBlock language="bash" code={`$ pwd          # Print working directory\n$ ls           # List files\n$ ls -la       # List all including hidden\n$ cd folder    # Change directory\n$ cd ..        # Go back`} />

                                <h3 className="text-xl font-bold mb-4 mt-8 text-secondary">Creating & Managing</h3>
                                <CodeBlock language="bash" code={`$ touch file.txt             # Create empty file\n$ mkdir folder               # Create folder\n$ cp file1 file2             # Copy file\n$ mv oldname newname         # Rename/Move\n$ rm -rf folder              # ⚠ Delete folder recursively`} />
                            </section>

                            <section id="viewing" className="mb-16">
                                <h2 className="text-3xl font-bold mb-6 text-primary border-l-4 border-green-500 pl-4">4. File Viewing & Editing</h2>
                                <CodeBlock language="bash" code={`$ cat file.txt        # Output entire file\n$ head -n 5 file.txt  # First 5 lines\n$ tail -f log.log     # Follow log file in real-time\n$ nano file.txt       # Simple text editor\n$ vim file.txt        # Advanced text editor`} />
                            </section>

                            <section id="perms" className="mb-16">
                                <h2 className="text-3xl font-bold mb-6 text-primary border-l-4 border-green-500 pl-4">5. Permissions & Ownership</h2>
                                <p className="text-textDim mb-4">Linux security is built on permissions (Read, Write, Execute).</p>
                                <CodeBlock language="bash" code={`$ chmod +x script.sh       # Make script executable\n$ chmod 755 file.txt       # Set specific permissions\n$ chown user:group file    # Change owner and group`} />
                            </section>

                            <section id="search" className="mb-16">
                                <h2 className="text-3xl font-bold mb-6 text-primary border-l-4 border-green-500 pl-4">6. Search & Find</h2>
                                <CodeBlock language="bash" code={`$ grep "error" app.log           # Search for text in file\n$ find /etc -name "*.conf"       # Find files by name\n$ which python                   # Locate command path`} />
                            </section>

                            <section id="network" className="mb-16">
                                <h2 className="text-3xl font-bold mb-6 text-primary border-l-4 border-green-500 pl-4">8. Networking Commands</h2>
                                <CodeBlock language="bash" code={`$ ping google.com      # Check connectivity\n$ ip a                 # Show IP addresses\n$ curl -I google.com   # Fetch HTTP headers\n$ wget url             # Download file`} />
                            </section>

                            <section id="process" className="mb-16">
                                <h2 className="text-3xl font-bold mb-6 text-primary border-l-4 border-green-500 pl-4">9. Process Management</h2>
                                <CodeBlock language="bash" code={`$ top                  # Monitor system resources\n$ ps aux               # List all running processes\n$ kill -9 1234         # Force kill process by PID\n$ pkill process_name   # Kill by name`} />
                            </section>

                            <section id="system" className="mb-16">
                                <h2 className="text-3xl font-bold mb-6 text-primary border-l-4 border-green-500 pl-4">10. Disk & System Information</h2>
                                <CodeBlock language="bash" code={`$ df -h      # Disk space usage (human readable)\n$ du -sh .   # Total size of current directory\n$ free -h    # Memory (RAM) usage\n$ uptime     # System run time`} />
                            </section>

                            <section id="packages" className="mb-16">
                                <h2 className="text-3xl font-bold mb-6 text-primary border-l-4 border-green-500 pl-4">11. Package Management</h2>
                                <CodeBlock language="bash" code={`# Debian/Ubuntu\n$ sudo apt update && sudo apt install git\n\n# Red Hat/CentOS\n$ sudo yum install git`} />
                            </section>

                            <section id="cheatsheet" className="mb-16 overflow-x-auto">
                                <h2 className="text-3xl font-bold mb-6 text-primary border-l-4 border-green-500 pl-4">15. Linux Command Cheat Sheet</h2>
                                <table className="w-full text-left border-collapse border border-backgroundLight rounded-xl overflow-hidden">
                                    <thead>
                                        <tr className="bg-backgroundSecondary">
                                            <th className="p-4 border border-backgroundLight text-primary font-bold">Command</th>
                                            <th className="p-4 border border-backgroundLight text-primary font-bold">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-textDim">
                                        {[
                                            { cmd: "ls", desc: "List files" },
                                            { cmd: "cd", desc: "Change directory" },
                                            { cmd: "pwd", desc: "Current directory" },
                                            { cmd: "cp", desc: "Copy files" },
                                            { cmd: "mv", desc: "Move files" },
                                            { cmd: "rm", desc: "Delete files" },
                                            { cmd: "chmod", desc: "Change permissions" },
                                            { cmd: "chown", desc: "Change owner" },
                                            { cmd: "grep", desc: "Search text" },
                                            { cmd: "find", desc: "Find files" },
                                            { cmd: "tar", desc: "Archive" },
                                            { cmd: "top", desc: "Process monitor" },
                                            { cmd: "df", desc: "Disk usage" },
                                            { cmd: "free", desc: "Memory" },
                                            { cmd: "ssh", desc: "Remote login" },
                                        ].map((row, rIdx) => (
                                            <tr key={rIdx} className="hover:bg-backgroundSecondary transition-colors">
                                                <td className="p-4 border border-backgroundLight font-mono text-secondary font-bold">{row.cmd}</td>
                                                <td className="p-4 border border-backgroundLight">{row.desc}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </section>

                            <section className="mt-20 p-10 bg-backgroundSecondary rounded-3xl border border-backgroundLight relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl font-bold italic text-green-500">Root</div>
                                <h2 className="text-3xl font-bold mb-6 text-primary">Conclusion</h2>
                                <p className="text-textDim text-lg leading-relaxed">
                                    This guide is your foundation for Linux mastery. The best way to learn is by doing—open your terminal, try these commands, and explore the system. As you get comfortable, you&apos;ll find the CLI far more efficient than any graphical tool!
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

export default LinuxCommandGuide;
