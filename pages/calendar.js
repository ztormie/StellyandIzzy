import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function BookingCalendar() {
  const [availability, setAvailability] = useState({});
  const [selectedDate, setSelectedDate] = useState(new Date());

  // 📌 Fetch availability from Google Apps Script
  useEffect(() => {
    async function fetchAvailability() {
      try {
        const response = await fetch("https://script.google.com/macros/s/AKfycbwDWLghFbgyGiL1stwyd_W36gY_YrqhFuw4sA3mZxUrTDkOJd8uFmDOmMVP1VnMCkjM/exec"); // Replace with your script URL
        const data = await response.json();
        setAvailability(data);
      } catch (error) {
        console.error("Error fetching availability:", error);
      }
    }
    fetchAvailability();
  }, []);

  // 📌 Highlight available & booked dates
  function tileClassName({ date, view }) {
    if (view === "month") {
      const dateStr = date.toDateString();
      if (availability[dateStr]) {
        return availability[dateStr].available > 0 ? "available" : "booked";
      }
    }
    return "";
  }

  return (
    <div>
      <h2>Booking Calendar</h2>
      <Calendar
        onChange={setSelectedDate}
        value={selectedDate}
        tileClassName={tileClassName}
      />
      <style jsx>{`
        .available {
          background-color: #b6e3b6 !important;
          border-radius: 50%;
        }
        .booked {
          background-color: #e3b6b6 !important;
          border-radius: 50%;
        }
      `}</style>
    </div>
  );
}
