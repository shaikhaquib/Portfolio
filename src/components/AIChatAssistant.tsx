import React, { useState } from 'react';
import { SAMPLE_QUESTIONS, getAIResponse } from '../data/aiAssistantKB';
import { X, Bot, Send, Sparkles, User, Copy, Check, Download, Mail, Smartphone } from 'lucide-react';
import { PERSONAL_INFO } from '../data/resumeData';

interface AIChatAssistantProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
}

export const AIChatAssistant: React.FC<AIChatAssistantProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'ai',
      text: `Hello! I'm Aquib's AI Resume Assistant. I can answer questions about his 8+ years of Android engineering experience, ICICI iMobile & GCash projects, Jetpack Compose skills, and AI engineering workflows. What would you like to know?`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [inputQuery, setInputQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSendMessage = (textToSend?: string) => {
    const query = (textToSend || inputQuery).trim();
    if (!query) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const aiAnswer = getAIResponse(query);
    const aiMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      sender: 'ai',
      text: aiAnswer,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg, aiMsg]);
    setInputQuery('');
  };

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-obsidian-950/70 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-md bg-obsidian-950 border-l border-slate-800 shadow-2xl h-full flex flex-col justify-between">
        
        {/* Drawer Header */}
        <div className="p-4 bg-obsidian-900 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-cyber-500 p-[1px] flex items-center justify-center">
              <div className="w-full h-full bg-obsidian-950 rounded-[11px] flex items-center justify-center">
                <Bot className="w-5 h-5 text-emerald-400" />
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                Aquib AI Assistant
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </h3>
              <p className="text-[11px] text-slate-400">Powered by Aquib's Resume Knowledge Base</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800/80 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Question Chips */}
        <div className="p-3 bg-obsidian-900/60 border-b border-slate-800/80 overflow-x-auto whitespace-nowrap space-x-2 text-xs">
          <span className="text-[11px] text-slate-400 font-mono">Suggested:</span>
          {SAMPLE_QUESTIONS.slice(0, 4).map((sq) => (
            <button
              key={sq.id}
              onClick={() => handleSendMessage(sq.question)}
              className="inline-block px-3 py-1 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
            >
              {sq.question}
            </button>
          ))}
        </div>

        {/* Chat Messages Body */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start gap-3 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}
            >
              <div
                className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-xs font-bold ${
                  msg.sender === 'user'
                    ? 'bg-emerald-500 text-obsidian-950'
                    : 'bg-slate-800 text-emerald-400 border border-slate-700'
                }`}
              >
                {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              <div
                className={`max-w-[82%] p-3.5 rounded-2xl text-xs leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-emerald-500 text-obsidian-950 font-medium rounded-tr-none'
                    : 'bg-obsidian-900 border border-slate-800 text-slate-200 rounded-tl-none space-y-2'
                }`}
              >
                <p>{msg.text}</p>
                
                {msg.sender === 'ai' && (
                  <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-400">
                    <span>{msg.timestamp}</span>
                    <button
                      onClick={() => handleCopy(msg.id, msg.text)}
                      className="hover:text-emerald-400 transition-colors flex items-center gap-1"
                    >
                      {copiedId === msg.id ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedId === msg.id ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Action Footer Links */}
        <div className="p-3 bg-obsidian-900 border-t border-slate-800/80 flex items-center justify-around text-xs">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="flex items-center gap-1 text-slate-300 hover:text-emerald-400 font-medium"
          >
            <Mail className="w-3.5 h-3.5" /> Email Aquib
          </a>
          <a
            href={PERSONAL_INFO.resumePdfUrl}
            download="AQUIB-SHAIKH-RESUME.pdf"
            className="flex items-center gap-1 text-slate-300 hover:text-emerald-400 font-medium"
          >
            <Download className="w-3.5 h-3.5" /> Download Resume
          </a>
        </div>

        {/* Chat Input Bar */}
        <div className="p-3 bg-obsidian-950 border-t border-slate-800 flex items-center gap-2">
          <input
            type="text"
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Ask anything about Aquib's experience..."
            className="flex-1 bg-obsidian-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
          />
          <button
            onClick={() => handleSendMessage()}
            className="p-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-obsidian-950 font-bold transition-all shadow-md shadow-emerald-500/20"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
