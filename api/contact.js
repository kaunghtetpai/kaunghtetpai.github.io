export default function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ 
            error: 'Method not allowed',
            allowed: ['POST']
        });
    }

    const { name, email, subject, message, company, phone } = req.body;

    // Enhanced validation
    if (!name || !email || !subject || !message) {
        return res.status(400).json({ 
            error: 'Required fields missing',
            required: ['name', 'email', 'subject', 'message']
        });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ 
            error: 'Invalid email format'
        });
    }

    // Log submission (in production, integrate with email service)
    console.log('Contact form submission 2025:', {
        name,
        email,
        subject,
        message,
        company: company || 'Not provided',
        phone: phone || 'Not provided',
        timestamp: new Date().toISOString(),
        userAgent: req.headers['user-agent'],
        ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress
    });

    res.status(200).json({ 
        success: true,
        message: 'Message sent successfully',
        reference: `KHP-${Date.now()}`,
        timestamp: new Date().toISOString(),
        year: 2025
    });
}