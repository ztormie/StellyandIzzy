import { useState } from "react";

export default function CalendarPage() {
  const [selectedDate, setSelectedDate] = useState("");

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Booking Calendar</h1>
      <p>Select a date for your appointment:</p>
      <input type="date" onChange={(e) => setSelectedDate(e.target.value)} />
      {selectedDate && <p>You selected: {selectedDate}</p>}
    </div>
  );
}
