import React from 'react';
import { Navigate } from "react-router-dom";
import Login from "../pages/Login"
import Home from "../pages/Home"

const routes = [
  {
    path: "/",
    element: <Navigate to="/home" />,  // 默认重定向到首页
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "*",
    element: <div>404 页面未找到</div>,
  },
]
export default routes;