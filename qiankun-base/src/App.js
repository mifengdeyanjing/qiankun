import React, { useEffect } from 'react';
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import './App.css';

const { Header, Content, Footer } = Layout;

// 菜单项配置
const items = [
  { key: '1', label: 'app1', route: '/app1' },
  { key: '2', label: 'app2', route: '/app2' },
];

function App() {
  const navigate = useNavigate();

  const onMenuSelect = (item) => {
    const selectedItem = items.find(i => i.key === item.key);
    if (selectedItem) {
      // 调整浏览器地址以激活子应用
      navigate(selectedItem.route);
    }
  };

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center',width:'100%' }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
          onSelect={onMenuSelect}
        />
      </Header>
      <Content style={{ padding: '0' }}>
        <div style={{ minHeight: `calc(100vh - 64px - 70px)`, padding: 0 }}>
          <div id="app1"></div>
          <div id="app2"></div>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        ©{new Date().getFullYear()} 后台总揽
      </Footer>
    </Layout>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}