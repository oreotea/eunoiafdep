// frontend/src/components/ChatComponent.js
import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { fastAPI } from '../api/api';

const ChatComponent = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [initialized, setInitialized] = useState(false);
  const [sessionId, setSessionId] = useState(null);

  useEffect(() => {
    const initializeChat = async () => {
      try {
        const response = await fastAPI.post('/session/template_generator', {
          user: "Thaha",
          age: 28,
          gender: "Male",
          status: "incognito",
          mode: "chat"
        });

        const aiMessage = response.data.messages.find((msg) => msg.role === 'assistant');
        if (aiMessage) {
          setMessages([aiMessage]);
        }
        setSessionId(response.data.session_id); // Assume session_id is returned in the response
        setInitialized(true);
      } catch (error) {
        console.error('Error initializing chat:', error);
      }
    };

    if (!initialized) {
      initializeChat();
    }
  }, [initialized]);

  const sendMessage = async () => {
    if (input.trim() === '') return;

    const newMessage = { role: 'user', content: input };
    setMessages((prev) => [...prev, newMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await fastAPI.post('/chat/text_completion', {
        metadata: { id: sessionId, user: "Thaha" },
        messages: [{ role: 'user', content: input }]
      });

      const aiMessage = response.data.messages.find((msg) => msg.role === 'assistant');
      if (aiMessage) {
        setMessages((prev) => [...prev, aiMessage]);
      }
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ width: '100%', mt: 4 }}>
      <Box sx={{ maxHeight: '300px', overflowY: 'auto', mb: 2 }}>
        {messages.map((message, index) => (
          <Typography key={index} align={message.role === 'user' ? 'right' : 'left'}>
            {message.content}
          </Typography>
        ))}
      </Box>
      <Box sx={{ display: 'flex', gap: 1 }}>
        <TextField
          fullWidth
          variant="outlined"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={loading || !initialized}
        />
        <Button variant="contained" onClick={sendMessage} disabled={loading || !initialized}>
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default ChatComponent;
