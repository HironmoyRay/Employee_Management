import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./component/Home/Home";
import "./index.css";
import Calender from "./pages/Calender/Calender";
import Employees from "./pages/Employees/Employees";
import Profile from "./pages/Profile/Profile";
import SignInForm from "./pages/SignInForm/SignInForm";
import Terminal from "./pages/Terminal/Terminal";
import NewSite from "./component/NewSite/NewSite";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        // loader: () => fetch("../public/daily_reports/..JSON"),
        element: <Employees></Employees>,
      },
      {
        path: "/employees",
        // loader: () => fetch("../public/daily_reports/..JSON"),
        element: <Employees></Employees>,
      },
      {
        path: "/calender",
        element: <Calender></Calender>,
        // element:<Calender2></Calender2>
      },
      {
        path: "/signin",
        element: <SignInForm></SignInForm>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/terminals",
        loader: () => fetch("../public/sites/sites.json"),
        element: <Terminal></Terminal>,
      },
      {
        path: "/site",
        element: <NewSite></NewSite>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
