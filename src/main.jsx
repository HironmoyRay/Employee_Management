import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./component/Home/Home";
import "./index.css";
// import AllSites from "./pages/AllSites/AllSites";
import DashBoard from "./pages/DashBoard/DashBoard";
// import Details from "./pages/Details/Details";
import Calender from "./pages/Calender/Calender";
import Employees from "./pages/Employees/Employees";
import Profile from "./pages/Profile/Profile";
import SignInForm from "./pages/SignInForm/SignInForm";
import Site from "./pages/Site/Site";
import Terminal from "./pages/Terminal/Terminal";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <DashBoard></DashBoard>,
      },
      {
        path: "/employees",
        loader: () => fetch("../public/daily_reports/..JSON"),
        element: <Employees></Employees>,
      },
      {
        path: "/calender",
        element: <Calender></Calender>,
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
    
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
