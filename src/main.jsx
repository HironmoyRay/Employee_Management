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
import Terminal from "./pages/Terminal/Terminal";
import User from "./pages/User/User";

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
      // {
      //   path: "/details/E01",
      //   loader: () => fetch("../public/daily_reports/1.JSON"),
      //   element: <Details></Details>,
      // },
      // {
      //   path: "/details/E02",
      //   loader: () => fetch("../public/daily_reports/2.JSON"),
      //   element: <Details></Details>,
      // },
      // {
      //   path: "/details/E03",
      //   loader: () => fetch("../public/daily_reports/3.JSON"),
      //   element: <Details></Details>,
      // },
      // {
      //   path: "/details/E04",
      //   loader: () => fetch("../public/daily_reports/4.JSON"),
      //   element: <Details></Details>,
      // },
      // {
      //   path: "/details/E05",
      //   loader: () => fetch("../public/daily_reports/5.JSON"),
      //   element: <Details></Details>,
      // },
      // {
      //   path: "/details/E06",
      //   loader: () => fetch("../public/daily_reports/6.JSON"),
      //   element: <Details></Details>,
      // },
      // {
      //   path: "/details/E07",
      //   loader: () => fetch("../public/daily_reports/7.JSON"),
      //   element: <Details></Details>,
      // },
      // {
      //   path: "/details/E08",
      //   loader: () => fetch("../public/daily_reports/8.JSON"),
      //   element: <Details></Details>,
      // },
      // {
      //   path: "/details/E09",
      //   loader: () => fetch("../public/daily_reports/9.JSON"),
      //   element: <Details></Details>,
      // },
      // {
      //   path: "/details/E10",
      //   loader: () => fetch("../public/daily_reports/10.JSON"),
      //   element: <Details></Details>,
      // },
      {
        path: "/user",
        element: <User></User>,
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
