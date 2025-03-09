import { useState, useEffect } from "react";

export default function CalendarPage() {
  const [availableDates, setAvailableDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [availableSlots, setAvailableSlots] = useState([]);

  // 🔹 Simulate fetching available dates from Google Sheets
  useEffect(() => {
    const fetchAvailableDates = async () => {
      // Replace this with actual Google Sheets API call later
      const mockAvailableDates = ["2025-03-12", "2025-03-14", "2025-03-16"];
      setAvailableDates(mockAvailableDates);
    };
    fetchAvailableDates();
  }, []);

  // 🔹 Fetch available slots when a date is selected
  const fetchAvailableSlots = (date) => {
    // Placeholder data (replace with real API later)
    const mockSlots = {
      "2025-03-12": ["08:00 - 09:00", "10:00 - 11:00"],
      "2025-03-14": ["09:00 - 10:00", "11:00 - 12:00"],
      "2025-03-16": ["14:00 - 15:00", "15:00 - 16:00"],
    };
    setAvailableSlots(mockSlots[date] || []);
  };

  const handleDateChange = (event) => {
    const selected = event.target.value;
    setSelectedDate(selected);
    fetchAvailableSlots(selected);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Booking Calendar</h1>
      <p>Select a date:</p>

      <input
        type="date"
        onChange={handleDateChange}
        style={{
          padding: "5px",
          fontSize: "16px",
          border: availableDates.includes(selectedDate) ? "2px solid green" : "2px solid red",
        }}
      />

      {selectedDate && (
        <div style={{ marginTop: "20px" }}>
          <h2>Available Time Slots for {selectedDate}</h2>
          {availableSlots.length > 0 ? (
            availableSlots.map((slot, index) => (
              <button
                key={index}
                style={{ display: "block", margin: "10px auto", padding: "10px" }}
              >
                {slot}
              </button>
            ))
          ) : (
            <p>No available slots.</p>
          )}
        </div>
      )}

      <div style={{ marginTop: "30px", fontSize: "14px" }}>
        <p>✅ Green border = Available</p>
        <p>❌ Red border = Fully booked</p>
      </div>
    </div>
  );
}
