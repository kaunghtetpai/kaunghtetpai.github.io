export default function handler(req, res) {
    const portfolio = {
        profile: {
            name: "Kaung Htet Paing",
            title: "Digital Transformation Specialist",
            location: "Singapore",
            experience: "7+ years",
            education: ["UC Berkeley MBA", "Stanford CS"],
            company: "TechCorp Solutions"
        },
        skills: [
            "Digital Transformation Strategy",
            "Product Marketing Management", 
            "Key Account Management",
            "Pricing Strategy Development",
            "Business Process Optimization",
            "Change Management",
            "Data Analytics and Visualization",
            "Enterprise Architecture",
            "Cloud Migration Strategy"
        ],
        achievements: {
            revenue_growth: "32M increase",
            cost_reduction: "45% efficiency gain",
            team_leadership: "50+ professionals",
            client_satisfaction: "98% retention rate"
        },
        certifications: [
            "AWS Solutions Architect Professional",
            "Google Cloud Professional Data Engineer",
            "Salesforce Certified Administrator",
            "Agile Scrum Master (PSM I)",
            "Six Sigma Black Belt",
            "PMP Project Management Professional",
            "Microsoft Azure Solutions Architect",
            "Digital Marketing Institute Certified"
        ],
        contact: {
            email: "rita@oxp.mobi",
            phone: "+12342469978",
            linkedin: "linkedin.com/in/kaunghtetpai",
            github: "github.com/kaunghtetpai",
            twitter: "twitter.com/kaunghtetpai",
            website: "https://kaunghtetpai.github.io"
        },
        languages: ["English", "Mandarin", "Malay", "Myanmar"],
        timezone: "Asia/Singapore",
        availability: "Available for projects",
        lastUpdated: new Date().toISOString(),
        year: 2025
    };

    res.status(200).json(portfolio);
}