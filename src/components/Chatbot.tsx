
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I'm your Financial Portal Assistant. How can I help you today?", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { id: Date.now(), text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: "Thank you for your message. I'm here to help with your financial portal questions. This is a demo response.",
        sender: 'bot'
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);

    setInput('');
  };

  return (
    <>
      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 h-96 bg-white shadow-2xl rounded-lg border overflow-hidden z-50">
          <Card className="h-full flex flex-col border-0">
            <CardHeader className="bg-blue-900 text-white p-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm">Financial Assistant</CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-blue-800 p-1 h-6 w-6"
                >
                  ×
                </Button>
              </div>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col p-0">
              <div className="flex-1 overflow-y-auto p-3 space-y-2">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`p-2 rounded-lg text-xs ${
                      message.sender === 'user'
                        ? 'bg-blue-100 text-blue-900 ml-8'
                        : 'bg-slate-100 text-slate-800 mr-8'
                    }`}
                  >
                    {message.text}
                  </div>
                ))}
              </div>
              <div className="p-3 border-t">
                <div className="flex space-x-2">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                    className="text-xs"
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  />
                  <Button
                    onClick={handleSend}
                    size="sm"
                    className="bg-blue-900 hover:bg-blue-800"
                  >
                    Send
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Chat Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-blue-900 hover:bg-blue-800 shadow-lg z-40"
      >
        💬
      </Button>
    </>
  );
};

export default Chatbot;
