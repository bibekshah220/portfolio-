import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Header from "@/components/common/header";
import Contact from "@/components/contact";
import TextContainer from "@/components/common/TextContainer";
import { wordsContainerNoDelay } from "@/utils/AnimationVarients";

import CodeBlock from "@/components/blog/CodeBlock";

const GitCommandsGuide = () => {
    const sections = [
        {
            title: "1. Setup & Config",
            commands: [
                { cmd: "git init", desc: "Initialize a new local repository" },
                { cmd: 'git config --global user.name "Your Name"', desc: "Set your global username" },
                { cmd: 'git config --global user.email "email@example.com"', desc: "Set your global email" },
                { cmd: "git config --list", desc: "List all global and local configurations" }
            ]
        },
        {
            title: "2. Basic Workflow",
            commands: [
                { cmd: "git add <file>", desc: "Add a specific file to the staging area" },
                { cmd: "git add .", desc: "Add all changed files to staging" },
                { cmd: 'git commit -m "commit message"', desc: "Commit staged changes with a message" },
                { cmd: "git status", desc: "Check the status of your working directory" },
                { cmd: "git log", desc: "View commit history" },
                { cmd: "git diff", desc: "Show differences between working directory and staging" }
            ]
        },
        {
            title: "3. Branching & Merging",
            commands: [
                { cmd: "git branch", desc: "List all local branches" },
                { cmd: "git branch <name>", desc: "Create a new branch" },
                { cmd: "git checkout <name>", desc: "Switch to a specific branch" },
                { cmd: "git checkout -b <name>", desc: "Create and switch to a new branch" },
                { cmd: "git merge <branch>", desc: "Merge a branch into the current one" },
                { cmd: "git branch -d <name>", desc: "Delete a local branch" }
            ]
        },
        {
            title: "4. Working with Remotes",
            commands: [
                { cmd: "git clone <url>", desc: "Clone an existing repository" },
                { cmd: "git remote add origin <url>", desc: "Link local repo to a remote server" },
                { cmd: "git push origin <branch>", desc: "Push local commits to remote" },
                { cmd: "git pull", desc: "Fetch and merge changes from remote" },
                { cmd: "git fetch", desc: "Download changes from remote without merging" }
            ]
        },
        {
            title: "5. Advanced & Undo",
            commands: [
                { cmd: "git reset <file>", desc: "Unstage a file while keeping its changes" },
                { cmd: "git checkout -- <file>", desc: "Discard changes in working directory" },
                { cmd: "git revert <commit>", desc: "Create a new commit that undoes a previous one" },
                { cmd: "git stash", desc: "Temporarily save uncommitted changes" },
                { cmd: "git stash pop", desc: "Apply and remove stashed changes" },
                { cmd: "git rebase <branch>", desc: "Apply commits on top of another base tip" }
            ]
        }
    ];

    return (
        <>
            <Head>
                <title>Mastering Git: The Complete Command Line Guide - Bibek Shah</title>
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
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            <TextContainer text="Mastering Git: The Complete Command Line Guide" />
                        </h1>

                        <div className="flex items-center gap-4 text-textDim mb-12">
                            <span className="px-3 py-1 bg-backgroundLight text-primary text-xs rounded-full">Git & GitHub</span>
                            <span>Jan 16, 2026</span>
                            <span>15 min read</span>
                        </div>

                        <div className="prose prose-invert prose-lg max-w-none">
                            <p className="text-textDim text-xl mb-12 leading-relaxed">
                                Git is an essential tool for every modern developer. While GUI tools exist, mastering the command line gives you ultimate control and speed. This guide serves as a complete reference for the most common and powerful Git commands you&apos;ll use daily.
                            </p>

                            <section className="mb-12 p-8 bg-red-500/5 rounded-2xl border border-red-500/10">
                                <h2 className="text-2xl font-bold mb-6 text-primary">Git vs SVN: Why Git?</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h4 className="font-bold mb-3 text-red-500 text-xs uppercase tracking-widest">SVN (Centralized)</h4>
                                        <ul className="list-disc pl-6 space-y-1 text-textDim text-sm">
                                            <li>One central server</li>
                                            <li>Network required for commits</li>
                                            <li>Slow branching & merging</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-3 text-green-500 text-xs uppercase tracking-widest">Git (Distributed)</h4>
                                        <ul className="list-disc pl-6 space-y-1 text-textDim text-sm">
                                            <li>Every dev has full history</li>
                                            <li>Commit locally, push later</li>
                                            <li>Blazing fast branching</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {sections.map((section, idx) => (
                                <section key={idx} className="mb-12">
                                    <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-backgroundLight text-primary">
                                        {section.title}
                                    </h2>
                                    <div className="grid grid-cols-1 gap-4">
                                        {section.commands.map((item, cIdx) => (
                                            <div key={cIdx} className="mb-2">
                                                <CodeBlock language="bash" code={`$ ${item.cmd}`} />
                                                <p className="text-textDim text-sm -mt-4 mb-6 ml-2 italic">{item.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            ))}

                            <section className="mt-16 p-8 bg-backgroundLight/10 rounded-2xl border border-backgroundLight">
                                <h2 className="text-2xl font-bold mb-4 text-primary">Conclusion</h2>
                                <p className="text-textDim">
                                    Mastering these commands will significantly improve your productivity. Remember, Git is a safety net; the more you understand how it works under the hood, the more confident you&apos;ll be in managing your codebase and collaborating with others.
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

export default GitCommandsGuide;
