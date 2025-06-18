
import PromptChips from '@/components/PromptChips';

import VoiceInput from '@/components/VoiceInput';
import ExportChat from '@/components/ExportChat';
import React from 'react';


import ChatMessage from '@/components/ChatMessage';
import ChatInput from '@/components/ChatInput';
import TypingIndicator from '@/components/TypingIndicator';
import ThemeToggle from '@/components/ThemeToggle';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MessageSquare, Settings } from 'lucide-react';
import { useChat } from '../hooks/useChat';

const Chat = () => {
  const { messages, sendMessage, isLoading, messagesEndRef } = useChat();

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
            <MessageSquare className="w-4 h-4 text-white" />
          </div>
          <div>
            <h1 className="font-semibold text-lg">AI Chat Assistant</h1>
            <p className="text-xs text-muted-foreground">Always here to help</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button variant="ghost" size="sm" className="rounded-full">
            <Settings className="w-4 h-4" />
          </Button>
        </div>
      </header>

      {/* Messages */}
      <ScrollArea className="flex-1 px-4">
        <div className="py-4 space-y-4 max-w-4xl mx-auto">
          {messages.map((message) => (
            <ChatMessage
              key={message.id}
              message={message.content} // ✅ FIXED
              isUser={message.sender === 'user'} // ✅ FIXED
              timestamp={message.timestamp}
            />
          ))}
          {isLoading && <TypingIndicator />}
          <div ref={messagesEndRef} />
        </div>
      </ScrollArea>

      {/* Input */}
    {/* Input + Actions */}
<div className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
  <div className="max-w-4xl mx-auto p-4 space-y-2">
    {/* Chat input box */}
    <ChatInput onSendMessage={sendMessage} isLoading={isLoading} />
    <PromptChips onSend={sendMessage} />


    {/* Voice & Export actions */}
    <div className="flex justify-between items-center">
      <VoiceInput onResult={(text) => sendMessage(text)} />
      <ExportChat messages={messages} />
    </div>
  </div>
</div>

    </div>
  );
};

export default Chat;
