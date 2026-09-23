const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post('/api/greet', (req, res) => {
    const name = req.body.name;
    if (!name) {
        return res.status(400).json({ error: 'Name is required' });
    }
    
    const greeting = `Hello, ${name}! Welcome to our CI/CD Demo.`;
    res.json({ message: greeting });
});

app.listen(PORT, () => {
    console.log(`Backend server running on port ${PORT}`);
});
