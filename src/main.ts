import { createSSRApp } from "vue";
import App from "./App.vue";

// 导入全局样式
import "./static/main.scss";
import pinia from './stores';
export function createApp() {
  const app = createSSRApp(App);
  app.use(pinia)
  return {
    app,
  };
}
