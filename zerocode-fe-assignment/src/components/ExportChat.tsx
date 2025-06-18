import React from 'react';
import { Download } from 'lucide-react';
import { Button } from './ui/button';
import { Message } from '@/types/chat';

interface ExportChatProps {
  messages: Message[];
}

const ExportChat: React.FC<ExportChatProps> = ({ messages }) => {
  const exportAsText = () => {
    const text = messages.map(m => `${m.sender === 'user' ? 'You' : 'Bot'}: ${m.content}`).join('\n');
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'chat-history.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Button variant="outline" size="sm" onClick={exportAsText} title="Export Chat">
      <Download className="w-4 h-4 mr-2" />
      Export Chat
    </Button>
  );
};

export default ExportChat;
