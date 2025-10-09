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
            "AWS Solutions Architect",
            "Google Cloud Professional",
            "Salesforce Certified",
            "Agile Scrum Master",
            "Six Sigma Black Belt"
        ],
        contact: {
            email: "rita@oxp.mobi",
            phone: "+12342469978",
            linkedin: "linkedin.com/in/kaunghtetpai",
            github: "github.com/kaunghtetpai"
        },
        lastUpdated: new Date().toISOString(),
        year: 2025
    };

    res.status(200).json(portfolio);
}