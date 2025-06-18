import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { User, Bot } from 'lucide-react';

interface ChatMessageProps {
  message: string;
  isUser: boolean;
  timestamp: string | Date; // ✅ allow both
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, isUser, timestamp }) => {
  // Format timestamp safely
  const formattedTime =
    typeof timestamp === 'string'
      ? timestamp
      : new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div className={`flex gap-3 mb-4 animate-fade-in ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
      <Avatar className="w-8 h-8 flex-shrink-0">
        <AvatarFallback className={isUser ? 'bg-primary text-primary-foreground' : 'bg-muted'}>
          {isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
        </AvatarFallback>
      </Avatar>

      <div className={`flex flex-col max-w-[80%] ${isUser ? 'items-end' : 'items-start'}`}>
        <div
          className={`px-4 py-2 rounded-2xl shadow-sm ${
            isUser
              ? 'bg-primary text-primary-foreground rounded-br-md'
              : 'bg-muted text-muted-foreground rounded-bl-md'
          }`}
        >
          <p className="text-sm leading-relaxed">{message}</p>
        </div>
        <span className="text-xs text-muted-foreground mt-1 px-2">
          {formattedTime}
        </span>
      </div>
    </div>
  );
};

export default ChatMessage;
