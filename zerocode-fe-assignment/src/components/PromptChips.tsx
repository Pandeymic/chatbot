import React from 'react';
import { Button } from './ui/button';

interface PromptChipsProps {
  onSend: (text: string) => void;
}

const prompts = [
  'Tell me a joke',
  'Summarize this conversation',
  'What’s the weather?',
  'Who won the last IPL?',
];

const PromptChips: React.FC<PromptChipsProps> = ({ onSend }) => {
  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {prompts.map((prompt, index) => (
        <Button
          key={index}
          variant="outline"
          size="sm"
          onClick={() => onSend(prompt)}
        >
          {prompt}
        </Button>
      ))}
    </div>
  );
};

export default PromptChips;
