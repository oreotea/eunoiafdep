// frontend/src/components/SummaryDialog.js
import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';

const SummaryDialog = ({ open, onClose, duration }) => (
  <Dialog open={open} onClose={onClose}>
    <DialogTitle>Conversation Summary</DialogTitle>
    <DialogContent>
      <DialogContentText>
        The duration of your conversation was {duration}.
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose}>Close</Button>
    </DialogActions>
  </Dialog>
);

export default SummaryDialog;
