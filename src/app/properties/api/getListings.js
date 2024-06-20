import realtor from 'realtorca';

export default async function handler(req, res) {
    const agentId = process.env.NEXT_PUBLIC_AGENT_ID;
    if (!agentId) {
        return res.status(400).json({ error: 'Agent ID is required' });
    }

    try {
        const opts = {
            individualID: agentId,
            CultureId: 1, // English
            ApplicationId: 1,
            PropertySearchTypeId: 1, // Residential
            RecordsPerPage: 20, // Adjust as needed
            CurrentPage: 1, // Adjust as needed
        };
        const data = await realtor.post(opts);
        res.status(200).json(data.Results);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
