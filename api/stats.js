export default function handler(req, res) {
    const stats = {
        projects: 42,
        clients: 18,
        efficiency: 45,
        revenue: 32,
        experience: 7,
        certifications: 8,
        partnerships: 15,
        satisfaction: 98,
        countries: 12,
        industries: 8,
        teamSize: 50,
        costReduction: 40,
        lastUpdated: new Date().toISOString(),
        year: 2025,
        location: 'Singapore',
        status: 'active'
    };

    res.status(200).json(stats);
}