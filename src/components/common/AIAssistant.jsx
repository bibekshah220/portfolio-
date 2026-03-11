import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiSend } from 'react-icons/fi';
import { RiRobot2Line, RiRobot2Fill } from 'react-icons/ri';


const renderMessageContent = (content) => {
    if (typeof content !== 'string') return content;
    const parts = content.split(/(https?:\/\/[^\s]+)/g);
    return parts.map((part, i) => {
        if (/^https?:\/\//.test(part)) {
            return (
                <a
                    key={i}
                    href={part}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline font-semibold hover:opacity-80 transition-opacity break-all"
                >
                    📅 Book a Meeting
                </a>
            );
        }
        return part;
    });
};

const AIAssistant = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'assistant', content: 'Hi! I\'m Bibek\'s AI. Ask me anything about his work or skills.' }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef(null);


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

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: input }),
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                console.error('Server responded with error:', response.status, errorData);
                throw new Error(errorData.message || `Server error: ${response.status}`);
            }

            const data = await response.json();
            const aiContent = data.response || "I received an empty response. Please try again.";
            setMessages((prev) => [...prev, { role: 'assistant', content: aiContent }]);
        } catch (error) {
            console.error('Detailed Error fetching AI response:', error);
            setMessages((prev) => [
                ...prev,
                { role: 'assistant', content: `Error: ${error.message}. Please check your connection or contact Bibek.` }
            ]);
        } finally {
            setIsTyping(false);
        }
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
                                        {msg.role === 'assistant' ? renderMessageContent(msg.content) : msg.content}
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
