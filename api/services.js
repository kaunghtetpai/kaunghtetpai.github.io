export default function handler(req, res) {
    const services = [
        {
            id: 1,
            name: "Digital Transformation Strategy",
            description: "Comprehensive digital transformation roadmap and implementation",
            duration: "3-6 months",
            price: "Starting from $25,000",
            features: [
                "Current state assessment",
                "Future state design",
                "Implementation roadmap",
                "Change management plan",
                "ROI measurement framework"
            ]
        },
        {
            id: 2,
            name: "Product Marketing Optimization",
            description: "End-to-end product marketing strategy and execution",
            duration: "2-4 months",
            price: "Starting from $15,000",
            features: [
                "Market research and analysis",
                "Competitive positioning",
                "Pricing strategy development",
                "Go-to-market planning",
                "Campaign execution"
            ]
        },
        {
            id: 3,
            name: "Enterprise Consulting",
            description: "Strategic consulting for large-scale business transformation",
            duration: "1-12 months",
            price: "Custom pricing",
            features: [
                "Executive advisory",
                "Process optimization",
                "Technology integration",
                "Team training and development",
                "Performance monitoring"
            ]
        },
        {
            id: 4,
            name: "Singapore Market Entry",
            description: "Complete market entry strategy for Southeast Asian expansion",
            duration: "4-8 months",
            price: "Starting from $30,000",
            features: [
                "Market analysis",
                "Regulatory compliance",
                "Local partnership development",
                "Cultural adaptation strategy",
                "Launch execution"
            ]
        }
    ];

    res.status(200).json({
        services,
        total: services.length,
        currency: "USD",
        location: "Singapore",
        availability: "Available for new projects",
        lastUpdated: new Date().toISOString(),
        year: 2025
    });
}