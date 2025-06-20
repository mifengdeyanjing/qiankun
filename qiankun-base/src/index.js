// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { registerMicroApps, start,setDefaultMountApp } from 'qiankun';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

/**
 * initGlobalState：定义全局状态，并返回通信方法，建议在主应用使用，微应用通过 props 获取通信方法
 *    onGlobalStateChange：监听全局状态
 *    setGlobalState：设置全局状态
 *    offGlobalStateChange：移除当前应用的状态监听
*/

/**
 *  const state = { name: '啦啦啦' }
    const actions = initGlobalState(state);
    actions.onGlobalStateChange((state, prev) => { console.log(state, prev) });
    setTimeout(() => {
      actions.setGlobalState({ ...state, age: 34});
    }, 2000);
    actions.offGlobalStateChange();
*/

registerMicroApps([
  {
    name: 'app1',
    entry: '//localhost:3011',
    container: '#app1',
    activeRule: '/app1',
    props: {
      name: "我是app1",
      age: 32
    }
  },
  {
    name: 'app2',
    entry: '//localhost:3012',
    container: '#app2',
    activeRule: '/app2',
    props: {
      name: "我是app2",
      age: 32
    }
  },
]);
setDefaultMountApp("/app1");
start();