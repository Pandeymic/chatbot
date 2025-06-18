import React, { useState } from 'react';
import { Mic, MicOff } from 'lucide-react';
import { Button } from './ui/button';

interface VoiceInputProps {
  onResult: (text: string) => void;
}

const VoiceInput: React.FC<VoiceInputProps> = ({ onResult }) => {
  const [listening, setListening] = useState(false);
  const recognitionRef = useState(() => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.continuous = false;
    return recognition;
  })[0];

  const toggleListening = () => {
    if (listening) {
      recognitionRef.stop();
      setListening(false);
    } else {
      recognitionRef.start();
      setListening(true);
    }
  };

  recognitionRef.onresult = (event: SpeechRecognitionEvent) => {
    const result = event.results[0][0].transcript;
    onResult(result);
    setListening(false);
  };

  recognitionRef.onerror = () => setListening(false);

  return (
    <Button
      type="button"
      onClick={toggleListening}
      className={`rounded-full p-2 ${listening ? 'bg-red-600 text-white' : 'bg-muted'}`}
      title="Toggle voice input"
    >
      {listening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
    </Button>
  );
};

export default VoiceInput;
