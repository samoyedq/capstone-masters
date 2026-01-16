import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import ThemeProvider from "./context/ThemeContext";
import LandingPage from "./components/LandingPage"

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path={"/"} element={<LandingPage/>}/>
          <Route path={"/signup"} element={<SignUp/>}/>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;