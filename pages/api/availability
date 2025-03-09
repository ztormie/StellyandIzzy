import { google } from "googleapis";

export default async function handler(req, res) {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: JSON.parse(process.env.GOOGLE_CREDENTIALS),
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    const spreadsheetId = process.env.SPREADSHEET_ID;
    
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: "Availability!A2:B",
    });

    const availabilityData = {};
    response.data.values.forEach(([date, status]) => {
      availabilityData[date] = status;
    });

    res.status(200).json(availabilityData);
  } catch (error) {
    console.error("Error fetching availability:", error);
    res.status(500).json({ error: "Failed to load availability data" });
  }
}
