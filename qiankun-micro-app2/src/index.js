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
  const basePath = window.__POWERED_BY_QIANKUN__ ? "/app2" : "/";
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

if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log('[react16] react app bootstraped');
}

export async function mount(props) {
  console.log('[react16] props from main framework', props);
  render(props);
}

export async function unmount(props) {
  if (root) {
    root.unmount(); 
    root = null;
  }
}