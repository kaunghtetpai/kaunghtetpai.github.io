export default function handler(req, res) {
    const projects = [
        {
            id: 1,
            title: "Enterprise Cloud Migration",
            description: "Led Fortune 500 company migration to AWS, reducing costs by 40% and improving scalability",
            technologies: ["AWS", "Kubernetes", "Terraform", "Docker"],
            impact: "40% cost reduction, 99.9% uptime",
            year: 2024,
            status: "completed"
        },
        {
            id: 2,
            title: "Digital Marketing Platform",
            description: "Developed omnichannel marketing automation platform serving 2M+ users",
            technologies: ["React", "Node.js", "MongoDB", "Redis"],
            impact: "2M+ users, 25% conversion increase",
            year: 2024,
            status: "completed"
        },
        {
            id: 3,
            title: "AI-Powered Analytics Dashboard",
            description: "Built real-time business intelligence platform with predictive analytics",
            technologies: ["Python", "TensorFlow", "PostgreSQL", "D3.js"],
            impact: "Real-time insights, 30% faster decisions",
            year: 2023,
            status: "completed"
        },
        {
            id: 4,
            title: "Supply Chain Optimization",
            description: "Implemented blockchain-based supply chain tracking system",
            technologies: ["Blockchain", "Smart Contracts", "IoT", "API Gateway"],
            impact: "100% transparency, 20% efficiency gain",
            year: 2023,
            status: "completed"
        },
        {
            id: 5,
            title: "Next-Gen Portfolio Platform",
            description: "Enterprise-scale portfolio website with Turborepo and Next.js",
            technologies: ["Next.js", "Turborepo", "TypeScript", "Vercel"],
            impact: "Enterprise performance, modern architecture",
            year: 2025,
            status: "active"
        },
        {
            id: 6,
            title: "Singapore FinTech Integration",
            description: "Digital payment system integration for Southeast Asian markets",
            technologies: ["Node.js", "React", "PostgreSQL", "AWS"],
            impact: "$5M transaction volume, 99.9% uptime",
            year: 2024,
            status: "completed"
        },
        {
            id: 7,
            title: "Multi-Language E-commerce Platform",
            description: "Cross-border e-commerce solution supporting 12 countries",
            technologies: ["Vue.js", "Laravel", "Redis", "Docker"],
            impact: "12 countries, 4 languages, 200K+ users",
            year: 2024,
            status: "completed"
        }
    ];

    res.status(200).json({
        projects,
        total: projects.length,
        completed: projects.filter(p => p.status === 'completed').length,
        active: projects.filter(p => p.status === 'active').length,
        lastUpdated: new Date().toISOString(),
        year: 2025
    });
}