import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";
import "./css/Responsive.css";

import MyCalendar from "./components/MyCalendar";

function App() {
  return (
    <div className="app">
      <MyCalendar />
    </div>
  );
}

export default App;
