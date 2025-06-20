import React from "react";
import { useRoutes } from "react-router-dom";
import { Layout, Menu } from "antd";
import { HomeOutlined, LoginOutlined, FileTextOutlined, AppstoreOutlined } from "@ant-design/icons";
import routes from "./routes/index"; // 导入刚才配置的路由
import { Link } from "react-router-dom";

const { Header, Content, Sider } = Layout;

// 路由组件
const AppRoutes = () => {
  return useRoutes(routes);
};

const App = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider theme="light" collapsible>
        <Menu theme="light" mode="inline">
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link to="/home">首页</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<LoginOutlined />}>
            <Link to="/login">登录</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<FileTextOutlined />}>
            <Link to="/detail">详情</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<AppstoreOutlined />}>
            <Link to="/coops">合作伙伴</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      {/* 右侧内容区域 */}
      <Layout>
        <Header style={{ background: "#fff", padding: 0, textAlign: "center" }}>Qiankun 微应用</Header>
        <Content style={{ margin: "16px" }}>
          <AppRoutes />
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;