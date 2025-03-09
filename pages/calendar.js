"use client";

import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import axios from "axios";

export default function BookingCalendar() {
  const [date, setDate] = useState(new Date());
  const [availability, setAvailability] = useState({});

  // Fetch availability from Google Sheets API (backend)
useEffect(() => {
  async function fetchAvailability() {
    try {
      const response = await axios.get("/api/availability");
      console.log("Fetched availability:", response.data); // Debugging line
      setAvailability(response.data);
    } catch (error) {
      console.error("Error fetching availability:", error);
    }
  }
  fetchAvailability();
}, []);


  // Function to check if a date has available slots
  function isDateAvailable(date) {
    const dateString = date.toISOString().split("T")[0]; // Format as YYYY-MM-DD
    return availability[dateString] === "Available";
  }

  return (
    <div className="calendar-container">
      <h1 className="title">Welcome to Stelly and Izzy's Booking System</h1>
      <p className="subtitle">Select a date:</p>

      <Calendar
        onChange={setDate}
        value={date}
        tileClassName={({ date }) =>
          isDateAvailable(date) ? "available-slot" : "unavailable-slot"
        }
      />

      <p className="selected-date">
        Selected Date: <strong>{date.toDateString()}</strong>
      </p>
    </div>
  );
}
