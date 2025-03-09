import { useState, useEffect } from "react";
import axios from "axios";

export default function CalendarPage() {
  const [selectedDate, setSelectedDate] = useState("");
  const [availableSlots, setAvailableSlots] = useState([]);

  // Function to fetch available time slots from Google Sheets (later)
  const fetchAvailableSlots = (date) => {
    // Placeholder: Mock data for now
    const mockSlots = [
      "08:00 - 09:00",
      "09:00 - 10:00",
      "10:00 - 11:00",
      "11:00 - 12:00",
      "13:00 - 14:00",
      "14:00 - 15:00",
    ];
    setAvailableSlots(mockSlots);
  };

  useEffect(() => {
    if (selectedDate) {
      fetchAvailableSlots(selectedDate);
    }
  }, [selectedDate]);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Booking Calendar</h1>
      <p>Select a date for your appointment:</p>
      <input
        type="date"
        onChange={(e) => setSelectedDate(e.target.value)}
        style={{ padding: "5px", fontSize: "16px" }}
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
    </div>
  );
}
