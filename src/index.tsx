import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./pages/Header";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CreateEmployee from "./pages/CreateEmployee";
import EmployeeList from "./pages/EmployeeList";
import { Provider } from "react-redux";
import { persistor, store } from "./utils/store";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Header />
          <Routes>
            <Route path="/create-employee" element={<CreateEmployee />}></Route>
            <Route path="/employee-list" element={<EmployeeList />}></Route>

            <Route path="*" element={<CreateEmployee />} />
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
