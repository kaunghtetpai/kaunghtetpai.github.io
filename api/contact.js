export default function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    console.log('Contact form submission:', { name, email, subject, message });

    res.status(200).json({ 
        message: 'Message sent successfully',
        timestamp: new Date().toISOString()
    });
}