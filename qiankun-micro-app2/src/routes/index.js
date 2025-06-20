import React from 'react';
import { Navigate } from "react-router-dom";
import Login from "../pages/Login"
import Home from "../pages/Home"
import User from "../pages/User/index"
import UserDetail from "../pages/User/detail"

const routes = [
  {
    path: "/",
    element: <Navigate to="/login" />,  // 默认重定向到首页
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
    path:'user',
    element:<User/>
  },
  {
    path:'user/detail',
    element:<UserDetail/>
  },
  {
    path: "*",
    element: <div>404 页面未找到</div>,
  },
]
export default routes;