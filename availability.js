export default async function handler(req, res) {
    console.log("🟢 API /availability was called");

    try {
        console.log("🔍 Fetching availability data from Google Sheets...");

        // Call the function to fetch availability data
        const data = await getAvailabilityFromSheets();

        // ✅ Log the raw response from Google Sheets
        console.log("🟡 Raw data received from Google Sheets:", data);

        if (!data) {
            throw new Error("❌ No data received from Google Sheets");
        }

        // ✅ Check if the data is valid JSON
        try {
            const parsedData = JSON.parse(data);
            console.log("✅ Parsed JSON data:", parsedData);
            res.status(200).json(parsedData);
        } catch (jsonError) {
            console.error("❌ JSON Parsing Error:", jsonError.message);
            res.status(500).json({ error: "Invalid JSON response from Sheets" });
        }
    } catch (error) {
        console.error("❌ API Error:", error.message);
        res.status(500).json({ error: "Failed to load availability data" });
    }
}
