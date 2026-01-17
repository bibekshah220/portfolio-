import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Header from "@/components/common/header";
import Contact from "@/components/contact";
import TextContainer from "@/components/common/TextContainer";
import { wordsContainerNoDelay } from "@/utils/AnimationVarients";

import CodeBlock from "@/components/blog/CodeBlock";

const AWSLambdaGuide = () => {
    return (
        <>
            <Head>
                <title>Exploring AWS Lambda: A Practical Guide - Bibek Shah</title>
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
                            <TextContainer text="Exploring AWS Lambda: A Practical Guide to Automating EC2 Instance Management" />
                        </h1>

                        <div className="flex items-center gap-4 text-textDim mb-12">
                            <span className="px-3 py-1 bg-backgroundLight text-primary text-xs rounded-full">Cloud Computing</span>
                            <span>Jan 16, 2026</span>
                            <span>12 min read</span>
                        </div>

                        <div className="prose prose-invert prose-lg max-w-none">
                            <section className="mb-12">
                                <h2 className="text-2xl font-bold mb-4 text-primary">Introduction</h2>
                                <p className="text-textDim mb-6">
                                    Embark on a hands-on journey into the realm of AWS Lambda with this engaging activity. In this lab, we&apos;ll delve into the creation of an AWS Lambda function and the orchestration of automated tasks through Amazon EventBridge. Our primary focus will be on developing a Lambda function that leverages an AWS Identity and Access Management (IAM) role, enabling it to autonomously halt a running Amazon Elastic Compute Cloud (Amazon EC2) instance within your AWS account.
                                </p>
                                <img src="/blogs/aws-lambda/architecture.png" alt="Architecture Diagram" className="rounded-xl border border-backgroundLight mb-8 w-full" />
                            </section>

                            <section className="mb-12 p-8 bg-blue-500/5 rounded-2xl border border-blue-500/10">
                                <h2 className="text-2xl font-bold mb-6 text-primary">In this guide, you’ll master:</h2>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-blue-500 list-disc pl-6">
                                    <li>IAM Role & Policy Configuration</li>
                                    <li>Serverless Python Lambda Functions</li>
                                    <li>Event-Driven Automation Flow</li>
                                    <li>Real-world EC2 Lifecycle Management</li>
                                </ul>
                            </section>

                            <section className="mb-16">
                                <h2 className="text-3xl font-bold mb-8 text-primary border-l-4 border-blue-500 pl-4">Why Automate EC2 Management?</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="bg-red-500/5 p-6 rounded-xl border border-red-500/10">
                                        <h4 className="font-bold mb-3 text-red-500 uppercase tracking-wider text-xs">Manual Management</h4>
                                        <ul className="list-disc pl-6 space-y-2 text-textDim text-sm">
                                            <li>Human error & oversight</li>
                                            <li>High operational costs</li>
                                            <li>Wasted cloud resources</li>
                                            <li>Security risks from idle instances</li>
                                        </ul>
                                    </div>
                                    <div className="bg-green-500/5 p-6 rounded-xl border border-green-500/10">
                                        <h4 className="font-bold mb-3 text-green-500 uppercase tracking-wider text-xs">Automatedwith Lambda</h4>
                                        <ul className="list-disc pl-6 space-y-2 text-textDim text-sm">
                                            <li>Precision scheduled execution</li>
                                            <li>Zero-touch resource optimization</li>
                                            <li>Massive cloud cost savings</li>
                                            <li>Enhanced security posture</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            <img src="/blogs/aws-lambda/event-flow.png" alt="Event Flow Diagram" className="rounded-xl border border-backgroundLight mb-12 mx-auto max-w-2xl" />

                            <section className="mb-12">
                                <h3 className="text-xl font-bold mb-4 text-primary">Task 1: IAM Role Configuration</h3>
                                <ol className="list-decimal pl-6 space-y-4 text-textDim">
                                    <li>Open the AWS Management Console and navigate to the IAM service.</li>
                                    <li>In the left navigation pane, click on &quot;Roles&quot; and then &quot;Create role&quot;.</li>
                                    <li>Choose &quot;AWS service&quot; and select &quot;Lambda&quot; as the use case.</li>
                                    <li>Attach policies: <strong>AmazonEC2FullAccess</strong> and <strong>AWSLambdaBasicExecutionRole</strong>.</li>
                                    <li>Name the role <code>myStopinatorRole</code> and create it.</li>
                                </ol>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                                    <img src="/blogs/aws-lambda/iam-list.png" alt="IAM Roles List" className="rounded-lg border border-backgroundLight" />
                                    <img src="/blogs/aws-lambda/iam-details.png" alt="IAM Role Details" className="rounded-lg border border-backgroundLight" />
                                </div>
                            </section>

                            <section className="mb-12">
                                <h3 className="text-xl font-bold mb-4 text-primary">Task 2: Create a Lambda function</h3>
                                <p className="text-textDim mb-4">Navigate to the Lambda console and configure these settings:</p>
                                <ul className="list-disc pl-6 space-y-2 text-textDim">
                                    <li><strong>Function name:</strong> <code>myStopinator</code></li>
                                    <li><strong>Runtime:</strong> Python 3.11</li>
                                    <li><strong>Execution role:</strong> Use existing role (<code>myStopinatorRole</code>)</li>
                                </ul>
                                <img src="/blogs/aws-lambda/lambda-config.png" alt="Lambda Configuration" className="rounded-xl border border-backgroundLight mt-8" />
                            </section>

                            <section className="mb-12">
                                <h3 className="text-xl font-bold mb-4 text-primary">Task 3: Configure the trigger</h3>
                                <p className="text-textDim mb-4">Add a trigger for <strong>EventBridge (CloudWatch Events)</strong> with a new rule:</p>
                                <ul className="list-disc pl-6 space-y-2 text-textDim">
                                    <li><strong>Rule name:</strong> <code>everyMinute</code></li>
                                    <li><strong>Schedule expression:</strong> <code>rate(1 minute)</code></li>
                                </ul>
                                <img src="/blogs/aws-lambda/trigger-config.png" alt="Trigger Configuration" className="rounded-xl border border-backgroundLight mt-8" />
                            </section>

                            <section className="mb-12">
                                <h3 className="text-xl font-bold mb-4 text-primary">Task 4: Configure the Lambda function</h3>
                                <p className="text-textDim mb-4">Paste the following Python code into the <code>lambda_function.py</code> editor:</p>
                                <CodeBlock
                                    language="python"
                                    code={`import boto3
region = 'us-east-1' # Replace with your region
instances = ['i-0317320fde6661814'] # Replace with your Instance ID
ec2 = boto3.client('ec2', region_name=region)

def lambda_handler(event, context):
    ec2.stop_instances(InstanceIds=instances)
    print('stopped your instances: ' + str(instances))`}
                                />
                                <img src="/blogs/aws-lambda/lambda-code.png" alt="Lambda Source Code" className="rounded-xl border border-backgroundLight mt-8" />
                            </section>

                            <section className="mb-12">
                                <h3 className="text-xl font-bold mb-4 text-primary">Conclusion</h3>
                                <p className="text-textDim">
                                    By completing this lab, you&apos;ve gained practical insight into serverless automation. You now understand how to orchestrate AWS services (Lambda, EventBridge, IAM) to manage resources efficiently and reduce operational overhead.
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

export default AWSLambdaGuide;
