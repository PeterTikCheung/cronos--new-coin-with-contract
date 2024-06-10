import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Header";
import Welcome from "./Welcome";
import Refreshing from "./Refreshing";

function App() {
  return (
    <div>
      <Header />
      <Refreshing />
      <Routes>
        <Route path="/" element={<Welcome />} />
      </Routes>
    </div>
  );
}

export default App;
