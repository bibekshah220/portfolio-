import React, { useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

const CodeBlock = ({ code, language }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy!", err);
        }
    };

    return (
        <div className="relative group rounded-xl overflow-hidden border border-backgroundLight bg-[#1e1e1e] mb-6">
            <div className="flex justify-between items-center px-4 py-2 bg-[#252526] border-b border-backgroundLight">
                <span className="text-xs font-mono text-textDim uppercase">{language}</span>
                <button
                    onClick={handleCopy}
                    className="flex items-center gap-1 text-xs text-textDim hover:text-primary transition-colors focus:outline-none"
                >
                    {copied ? (
                        <>
                            <FiCheck className="text-green-500" />
                            <span className="text-green-500">Copied!</span>
                        </>
                    ) : (
                        <>
                            <FiCopy />
                            <span>Copy</span>
                        </>
                    )}
                </button>
            </div>
            <div className="text-sm">
                <SyntaxHighlighter
                    language={language}
                    style={vscDarkPlus}
                    customStyle={{
                        margin: 0,
                        padding: "1.5rem",
                        background: "transparent",
                        fontSize: "0.875rem",
                        lineHeight: "1.5",
                    }}
                    codeTagProps={{
                        style: {
                            fontFamily: 'inherit',
                        }
                    }}
                >
                    {code}
                </SyntaxHighlighter>
            </div>
        </div>
    );
};

export default CodeBlock;
