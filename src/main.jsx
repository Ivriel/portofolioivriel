import { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Homepage from "./Pages/Homepage";
import Projects from "./Pages/Projects";
import Competition from "./Pages/Competition";
import Certificates from "./Pages/Certificates";
import Notfound from "./Pages/Notfound";
import NoInternet from "./Pages/Nointernet"; 
import "@fontsource/poppins";

function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  if (!isOnline) {
    return <NoInternet />;
  }

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/competition" element={<Competition />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </HashRouter>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
