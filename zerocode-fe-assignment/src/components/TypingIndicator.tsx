
import React from 'react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Bot } from 'lucide-react';

const TypingIndicator = () => {
  return (
    <div className="flex gap-3 mb-4 animate-fade-in">
      <Avatar className="w-8 h-8 flex-shrink-0">
        <AvatarFallback className="bg-muted">
          <Bot className="w-4 h-4" />
        </AvatarFallback>
      </Avatar>
      
      <div className="flex flex-col">
        <div className="bg-muted px-4 py-3 rounded-2xl rounded-bl-md max-w-fit">
          <div className="flex gap-1">
            <div className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse-dot"></div>
            <div className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse-dot" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse-dot" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;
