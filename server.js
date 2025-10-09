const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// Serve static files
app.use(express.static('.'));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/sitemap.xml', (req, res) => {
    res.sendFile(path.join(__dirname, 'sitemap.xml'));
});

app.get('/atom.xml', (req, res) => {
    res.sendFile(path.join(__dirname, 'atom.xml'));
});

app.get('/robots.txt', (req, res) => {
    res.sendFile(path.join(__dirname, 'robots.txt'));
});

app.get('/api/portfolio', (req, res) => {
    res.json({
        name: "Kaung Htet Paing",
        title: "Digital Transformation Specialist",
        location: "Yangon, Myanmar",
        stats: { projects: 35, clients: 12, efficiency: 40, revenue: 25 },
        lastUpdated: new Date().toISOString()
    });
});

app.get('/api/stats', (req, res) => {
    res.json({
        projects: 35,
        clients: 12,
        efficiency: 40,
        revenue: 25,
        experience: 6,
        lastUpdated: new Date().toISOString()
    });
});

app.post('/api/contact', (req, res) => {
    const { name, email, subject, message } = req.body;
    console.log('Contact submission:', { name, email, subject, message });
    res.json({ message: 'Message sent successfully', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
    console.log(`Portfolio server running on http://localhost:${PORT}`);
});