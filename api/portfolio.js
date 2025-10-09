export default function handler(req, res) {
    const portfolio = {
        name: "Kaung Htet Paing",
        title: "Digital Transformation Specialist",
        location: "Yangon, Myanmar",
        email: "kaunghtetpaing.dev@gmail.com",
        phone: "+95 9 123 456 789",
        linkedin: "https://linkedin.com/in/kaunghtetpai",
        github: "https://github.com/kaunghtetpai",
        skills: [
            {
                category: "Digital Strategy",
                items: ["Digital Transformation Strategy", "Business Process Optimization", "Change Management Leadership", "Innovation Framework Development", "Technology Integration Planning"]
            },
            {
                category: "Product Marketing", 
                items: ["Market Research and Analysis", "Pricing Strategy Development", "Multi-Channel Campaign Management", "Customer Journey Optimization", "Strategic Brand Positioning"]
            },
            {
                category: "Analytics & Tools",
                items: ["Advanced Data Analytics", "CRM Platform Management", "Marketing Automation Systems", "Agile Project Management", "KPI Development and Tracking"]
            }
        ],
        experience: [
            {
                period: "2022 - Present",
                title: "Senior Digital Transformation Specialist",
                company: "Digital Solutions Myanmar",
                location: "Yangon",
                description: "Leading comprehensive digital transformation initiatives for enterprise clients, resulting in significant operational efficiency improvements and cost reductions."
            },
            {
                period: "2020 - 2022", 
                title: "Product Marketing Manager",
                company: "Myanmar Tech Hub",
                location: "Yangon",
                description: "Executed successful product launch campaigns and go-to-market strategies. Conducted extensive market research and competitive analysis."
            },
            {
                period: "2018 - 2020",
                title: "Business Development Associate", 
                company: "Innovation Center Myanmar",
                location: "Yangon",
                description: "Identified and developed new business opportunities in emerging markets. Created strategic partnerships and supported digital transformation projects."
            }
        ],
        projects: [
            {
                title: "Enterprise Digital Transformation",
                description: "Comprehensive digital transformation strategy for Fortune 500 company, implementing process automation and data analytics solutions.",
                technologies: ["Strategy", "Process Design", "Analytics", "Change Management"]
            },
            {
                title: "SaaS Product Launch",
                description: "End-to-end product marketing strategy for B2B SaaS platform, including market positioning and pricing optimization.",
                technologies: ["Market Research", "Pricing Strategy", "Campaign Management", "Analytics"]
            },
            {
                title: "Revenue Optimization Framework",
                description: "Data-driven pricing model redesign for B2B software company, resulting in significant revenue growth.",
                technologies: ["Pricing Models", "Data Analysis", "Customer Research", "Revenue Growth"]
            }
        ],
        lastUpdated: new Date().toISOString()
    };

    res.status(200).json(portfolio);
}