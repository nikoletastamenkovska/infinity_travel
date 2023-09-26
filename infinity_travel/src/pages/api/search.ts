import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { q } = req.query;

    if (!q) {
        return res.status(400).json({ error: "Search query is required" });
    }

    try {
        const arrangementsRes = await fetch(
            `https://secretive-canary-variraptor.glitch.me/arrangements?q=${q}`
        );
        const macedoniaRes = await fetch(
            `https://secretive-canary-variraptor.glitch.me/macedonia_arrangements?q=${q}`
        );
        const exoticRes = await fetch(
            `https://secretive-canary-variraptor.glitch.me/exotic_arrangement?q=${q}`
        );

        const arrangementsData = await arrangementsRes.json();
        const macedoniaData = await macedoniaRes.json();
        const exoticData = await exoticRes.json();

        const combinedResults = [
            ...arrangementsData,
            ...macedoniaData,
            ...exoticData,
        ];

        res.status(200).json(combinedResults);
    } catch (error) {
        res.status(500).json({ error: "An error occurred while fetching data" });
    }
}
