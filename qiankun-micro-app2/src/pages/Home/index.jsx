import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { Menu } from 'antd';

const items = [
  {
    label: '用户管理',
    url:'/user',
    key: 'mail',
    icon: <MailOutlined />,
  },
  {
    label: '文章管理',
    key: 'app',
    icon: <AppstoreOutlined />,
  },
  {
    label: '供应商管理',
    key: 'SubMenu',
    icon: <SettingOutlined />,
  },
];
const App = () => {
  const [current, setCurrent] = useState('mail');
  const navigate = useNavigate(); 

  const onClick = (e) => {
    console.log('click ', e);
    const { item:{props:{url}}} = e
    setCurrent(e.key);
    navigate(url)
  };
  return <Menu mode='vertical' onClick={onClick} selectedKeys={[current]} items={items} />;
};
export default App;