import Link from "next/link";

export default function Home() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Stella & Isabel Booking System</h1>
      <p>Welcome! Please choose an option:</p>
      <Link href="/calendar">
        <button style={{ margin: "10px", padding: "10px 20px", fontSize: "16px" }}>
          Book an Appointment
        </button>
      </Link>
      <Link href="/admin">
        <button style={{ margin: "10px", padding: "10px 20px", fontSize: "16px" }}>
          Admin Panel
        </button>
      </Link>
    </div>
  );
}
