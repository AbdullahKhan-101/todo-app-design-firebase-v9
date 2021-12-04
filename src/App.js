import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import { Routes, Route, Link } from "react-router-dom";

const App = () => {
  const [darkMode, setDarkMode] = useState("light");
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (darkMode === "light") {
      setDarkMode("dark");
      document.body.style.backgroundColor = " rgb(30, 46, 61)";
      document.body.style.color = "white";
      showAlert("dark mode enabled", "success");
      document.title = "Text Utility Dark Mode Enabled";
      setInterval(() => {
        document.title = "Text Utility is amazing";
      }, 1600);
      setInterval(() => {
        document.title = "Text install now";
      }, 1400);
    } else {
      setDarkMode("light");
      document.body.style.backgroundColor = "#dfe3ee";
      document.body.style.color = "black";
      showAlert("light mode enabled", "success");
      document.title = "Text Utility Light Mode Enabled";
    }
  };

  const toggleModebrown = () => {
    if (darkMode === "light") {
      setDarkMode("dark");
      document.body.style.backgroundColor = " rgb(47, 32, 32)";
      document.body.style.color = "white";
      showAlert("dark mode enabled", "success");
    } else {
      setDarkMode("light");
      document.body.style.backgroundColor = "#dfe3ee";
      document.body.style.color = "black";
      showAlert("light mode enabled", "success");
    }
  };

  return (
    <div>
      <Navbar
        toggleModebrown={toggleModebrown}
        mode={darkMode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <Routes>
        <Route
          path="/"
          element={
            <Form
              toggleModebrown={toggleModebrown}
              showAlert={showAlert}
              mode={darkMode}
              toggleMode={toggleMode}
            />
          }
        />
        <Route path="about" element={<About />} />
      </Routes>
      {/* <About /> */}
    </div>
  );
};

export default App;
