// frontend/src/components/SessionHistory.js
import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import { backendAPI as api } from '../api/api';

const SessionHistory = ({ onSelectSession }) => {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const fetchSessions = async () => {
      try {
        const response = await api.get('/user/sessions');
        setSessions(response.data);
      } catch (error) {
        console.error('Error fetching sessions:', error);
      }
    };

    fetchSessions();
  }, []);

  return (
    <List>
      {sessions.length > 0 ? (
        sessions.map((session, index) => (
          <ListItem button key={index} onClick={() => onSelectSession(session)}>
            <ListItemText primary={`${session.date}: ${session.duration} minutes`} />
          </ListItem>
        ))
      ) : (
        <ListItem>
          <ListItemText primary="No sessions found." />
        </ListItem>
      )}
    </List>
  );
};

export default SessionHistory;
