import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./Component/SignIn";
import SignUp from "./Component/SignUp";
import Home from "./Component/Home";
import Update from "./Component/Update";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
