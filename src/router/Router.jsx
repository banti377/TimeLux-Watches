import React from "react";
import Home from "../Ui/pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/login" element={<LoginForm />} /> */}
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
