import React, { useState } from "react";
import "./App.css";
import Navbar from "./Component/Navbar";
import Textarea from "./Component/Textarea";
import Alert from "./Component/Alert";
import About from "./Component/About";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// import About from "./Component/About";

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const showAlert = (massage, type) => {
    setAlert({
      msg: massage,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const togglemode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#04274e";
      setMyStyle({
        color: "white",
        backgroundColor: "rgb(23 55 89)",
      });
      showAlert("Enable Dark Mode", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      })
      showAlert("Enable Light Mode", "success");
    }
  };

  return (
    <>
      <Router basename="/text_utiles" >
        <Navbar title="TextUtils" mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />
        <Routes>
          <Route
            exact
            path="/about"
            element={<About mode={mode} myStyle={myStyle} />}
          />
          <Route
            path="/"
            element={
              <Textarea
                showAlert={showAlert}
                heading="Enter the text to analyze"
                mode={mode}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
