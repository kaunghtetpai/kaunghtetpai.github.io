export default function handler(req, res) {
    const testimonials = [
        {
            id: 1,
            name: "Sarah Chen",
            position: "VP of Digital Strategy",
            company: "TechCorp Solutions",
            location: "Singapore",
            rating: 5,
            text: "Kaung delivered exceptional results on our digital transformation project. His strategic approach and execution capabilities are outstanding.",
            project: "Enterprise Digital Transformation",
            year: 2024
        },
        {
            id: 2,
            name: "Michael Rodriguez",
            position: "Chief Marketing Officer",
            company: "InnovateTech Inc.",
            location: "San Francisco, CA",
            rating: 5,
            text: "Outstanding product marketing expertise. Kaung helped us achieve 60% increase in product adoption through strategic positioning.",
            project: "SaaS Product Launch",
            year: 2023
        },
        {
            id: 3,
            name: "Dr. Amanda Liu",
            position: "CEO",
            company: "FinTech Innovations",
            location: "Singapore",
            rating: 5,
            text: "Kaung's deep understanding of Southeast Asian markets was instrumental in our successful expansion. Highly recommended.",
            project: "Singapore FinTech Integration",
            year: 2024
        },
        {
            id: 4,
            name: "James Thompson",
            position: "Director of Operations",
            company: "Global Commerce Ltd",
            location: "Hong Kong",
            rating: 5,
            text: "Exceptional project management and strategic thinking. Delivered our multi-country e-commerce platform on time and under budget.",
            project: "Multi-Language E-commerce Platform",
            year: 2024
        }
    ];

    res.status(200).json({
        testimonials,
        total: testimonials.length,
        averageRating: 5.0,
        totalReviews: testimonials.length,
        lastUpdated: new Date().toISOString(),
        year: 2025
    });
}