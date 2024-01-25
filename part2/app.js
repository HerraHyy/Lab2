const express = require('express');
const app = express();
const port = 4000;

// Endpoint 1: Text Response
app.get('/textmessage', (req, res) => {
  res.send('This is a simple text response.');
});

// Endpoint 2: JSON Response
app.get('/jsonmessage', (req, res) => {
    const jsonData = {
    message: 'This is a part2 JSON response.',
    timestamp: new Date()
  };

  res.json(jsonData);
});

//Enndpoint 3: HTML Response
app.get('/htmlmessage', (req, res) => {
    res.send('This is a simple HTML response.');
});

//Endpoint 4: Greeting and time
app.get('/info', (req, res) => {
    res.send(`Hello, visitor! You are visiting at ${new Date()}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});