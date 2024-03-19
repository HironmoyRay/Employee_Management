import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./component/Home/Home";
import CreateEmployee from "./pages/CreateEmployee/CreateEmployee";
import SignInForm from "./pages/SignInForm/SignInForm";
import Employees from "./pages/Employees/Employees";
import Details from "./pages/Details/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path:"/",
        // element:<h1>This is From Home.</h1>
      },
      {
        path:"/employees",
        loader:()=>fetch("../public/daily_reports/daily_reports.JSON"),
        element:<Employees></Employees>
      },
      {
        path:"/employees/:id",
        loader:()=>fetch("../public/daily_reports/daily_reports.JSON"),
        element:<Details></Details>
      },
      {
        path:"/create",
        element:<CreateEmployee></CreateEmployee>
      },
      {
        path:"/signin",
        element:<SignInForm></SignInForm>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
