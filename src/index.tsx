import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./pages/Header";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { persistor, store } from "./utils/store";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const CreateEmployee = React.lazy(() => import("./pages/CreateEmployee"));
const EmployeeList = React.lazy(() => import("./pages/EmployeeList"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Header />
          <Routes>
            <Route
              path="/create-employee"
              element={
                <React.Suspense fallback={<div>Chargement...</div>}>
                  <CreateEmployee />
                </React.Suspense>
              }
            ></Route>
            <Route
              path="/employee-list"
              element={
                <React.Suspense fallback={<div>Chargement...</div>}>
                  <EmployeeList />
                </React.Suspense>
              }
            ></Route>

            <Route
              path="*"
              element={
                <React.Suspense fallback={<div>Chargement...</div>}>
                  <CreateEmployee />
                </React.Suspense>
              }
            />
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
