export default function handler(req, res) {
    const stats = {
        projects: 35,
        clients: 12,
        efficiency: 40,
        revenue: 25,
        experience: 6,
        lastUpdated: new Date().toISOString()
    };

    res.status(200).json(stats);
}