import React from "react";
import { useRoutes } from "react-router-dom";

import logo from './logo.svg';
import routes from "./routes/index"; // 导入刚才配置的路由
import './App.css';

// 路由组件
const AppRoutes = () => {
  return useRoutes(routes);
};

function App() {
  return (<AppRoutes/>);
}

export default App;
