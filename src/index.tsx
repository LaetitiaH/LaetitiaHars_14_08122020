import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./pages/Header";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/signIn" element={<div></div>}></Route>

        {/*<Route path="*" element={<Home />} />*/}
      </Routes>
      {/*<Footer />*/}
    </Router>
  </React.StrictMode>
);
