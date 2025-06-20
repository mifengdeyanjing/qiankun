import './public-path';
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client'; 
import reportWebVitals from './reportWebVitals';
import App from './App';
import './index.css';

reportWebVitals();

let root = null;

function render(props) {
  const { container } = props;
  const basePath = window.__POWERED_BY_QIANKUN__ ? "/app1" : "/";
  const dom = container ? container.querySelector("#root") : document.querySelector("#root");

  if (!root) {
    root = createRoot(dom); 
  }
  root.render(
    <BrowserRouter basename={basePath}>
      <App />
    </BrowserRouter>
  );
}

// ✅ 独立运行时渲染
if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log('[react16] react app bootstraped');
}

export async function mount(props) {
  console.log('props:', props);

  props.onGlobalStateChange((state, prev) => {
    console.log(state, 'state_prev', prev);
    setTimeout(() => {
      props.setGlobalState({ ...state, age: 36 });
    }, 2000);
  });

  render(props);
}

// ✅ 卸载时正确 unmount 根
export async function unmount(props) {
  const { container } = props;
  if (root) {
    root.unmount();
    root = null;
  }
}