import React, { useState } from 'react';
import axios from 'axios';

interface Message {
  text: string;
  type: 'user' | 'bot';
}

const Chat = () => {
    const [input, setInput] = useState<string>('');
    const [messages, setMessages] = useState<Message[]>([]);

    const sendMessage = async () => {
        if (input.trim() === '') return;

        // Send user message
        setMessages([...messages, { text: input, type: 'user' }]);
        setInput('');

        // Send message to ChatGPT
        try {
        const response = await axios.post('/api/chat', { message: input });
        const botReply = response.data.message;
        setMessages([...messages, { text: botReply, type: 'bot' }]);
        } catch (error) {
        console.error('Error sending message:', error);
        }
    };

    return (
        <div>
        <div>
            {messages.map((message, index) => (
            <div key={index} className={message.type}>
                {message.text}
            </div>
            ))}
        </div>
        <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
        </div>
    );
}

export default Chat