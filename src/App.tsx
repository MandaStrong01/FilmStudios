import { useState } from "react";
import Page11 from "./pages/Page11";

const SimplePage = ({ title }: { title: string }) => (
  <div style={{ padding: 40 }}>
    <h1 style={{ color: "#b388ff" }}>{title}</h1>
    <p>MandaStrong Studios 2025</p>
  </div>
);

export default function App() {
  const [page, setPage] = useState<number>(1);

  return (
    <div style={{ minHeight: "100vh", background: "#0b0618", color: "white" }}>
      
      {/* TOP-RIGHT MENU */}
      <div
        style={{
          position: "fixed",
          top: 20,
          right: 20,
          display: "grid",
          gridTemplateColumns: "repeat(5, auto)",
          gap: 6,
          zIndex: 1000,
        }}
      >
        {Array.from({ length: 21 }, (_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            style={{
              background: page === i + 1 ? "#b388ff" : "#1c1238",
              color: "white",
              border: "none",
              padding: "6px 10px",
              borderRadius: 6,
              cursor: "pointer",
              fontSize: 12,
            }}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {/* PAGE CONTENT */}
      <div style={{ paddingTop: 80 }}>
        {page === 1 && <SimplePage title="Page 1 – Welcome / Background Video" />}
        {page === 2 && <SimplePage title="Page 2 – Getting Started" />}
        {page === 3 && <SimplePage title="Page 3 – Tool Board" />}
        {page === 4 && <SimplePage title="Page 4 – Script Tools" />}
        {page === 5 && <SimplePage title="Page 5 – Storyboards" />}
        {page === 6 && <SimplePage title="Page 6 – Scene Builder" />}
        {page === 7 && <SimplePage title="Page 7 – Character Creator" />}
        {page === 8 && <SimplePage title="Page 8 – Audio Tools" />}
        {page === 9 && <SimplePage title="Page 9 – Video Tools" />}
        {page === 10 && <SimplePage title="Page 10 – Upload Doxy Movie" />}
        {page === 11 && <Page11 />}
        {page === 12 && <SimplePage title="Page 12 – Timeline Editor" />}
        {page === 13 && <SimplePage title="Page 13 – Effects & Transitions" />}
        {page === 14 && <SimplePage title="Page 14 – Music & Sound" />}
        {page === 15 && <SimplePage title="Page 15 – Voice & Lip Sync" />}
        {page === 16 && <SimplePage title="Page 16 – Legal / Disclaimers" />}
        {page === 17 && <SimplePage title="Page 17 – Terms & Safety" />}
        {page === 18 && <SimplePage title="Page 18 – Community Hub" />}
        {page === 19 && <SimplePage title="Page 19 – Projects" />}
        {page === 20 && <SimplePage title="Page 20 – Export Movie" />}
        {page === 21 && <SimplePage title="Page 21 – Video Demo / User Guide" />}
      </div>

      {/* FOOTER (from Page 3 onward) */}
      {page >= 3 && (
        <footer
          style={{
            marginTop: 120,
            padding: 20,
            textAlign: "center",
            color: "#777",
          }}
        >
          © 2025 MandaStrong Studios
        </footer>
      )}
    </div>
  );
}
