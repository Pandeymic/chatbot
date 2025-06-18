import { useState, useRef, useEffect, useCallback } from 'react';
import { Message } from '../types/chat';

export const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm here to chat with you. What's on your mind today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  const sendMessage = useCallback(async (content: string) => {
    if (!content.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString() + '-user',
      content: content.trim(),
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate bot reply after 1.5s
    setTimeout(() => {
     let reply = `Echo: ${content}`;

if (content.toLowerCase().includes("joke")) {
  reply = "Why don't programmers like nature? It has too many bugs.";
} else if (content.toLowerCase().includes("weather")) {
  reply = "It's always sunny in localhost 🌞";
} else if (content.toLowerCase().includes("ipl")) {
  reply = "CSK won the last IPL. Dhoni still finishes things off in style!";
} else if (content.toLowerCase().includes("summarize")) {
  reply = "You had a thoughtful conversation with your friendly AI assistant.";
}

const botMessage: Message = {
  id: Date.now().toString() + '-bot',
  content: reply,
  sender: 'bot',
  timestamp: new Date(),
};


      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
    }, 1500);
  }, []);

  const clearChat = useCallback(() => {
    setMessages([
      {
        id: '1',
        content: "Hello! I'm here to chat with you. What's on your mind today?",
        sender: 'bot',
        timestamp: new Date(),
      },
    ]);
  }, []);

  return {
    messages,
    isLoading,
    input,
    setInput,
    sendMessage,
    clearChat,
    messagesEndRef,
  };
};
