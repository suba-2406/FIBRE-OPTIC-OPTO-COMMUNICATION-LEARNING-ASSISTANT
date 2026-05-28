const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.get('/api/health', (req, res) => {
    res.json({ status: 'success', message: 'Backend is running!' });
});

app.get('/api/notes', (req, res) => {
    // In a real app, data would come from a database. 
    // Here we are just mocking the response for the frontend.
    res.json([
        { title: 'Introduction to Fiber Optics', content: 'Optical fibers are transparent, flexible fibers...' },
        { title: 'Total Internal Reflection (TIR)', content: 'The core principle behind optical fibers is...' }
    ]);
});

app.post('/api/evaluate', (req, res) => {
    const { answer } = req.body;
    // Mock AI evaluation
    const score = Math.floor(Math.random() * 100);
    res.json({ score, feedback: 'Great understanding of the topic!' });
});

app.listen(PORT, () => {
    console.log(`Backend Server running on http://localhost:${PORT}`);
});
