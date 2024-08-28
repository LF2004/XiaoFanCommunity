import { createSSRApp } from "vue";
import App from "./App.vue";
// 导入全局样式
import './static/main.scss';

import { useThemeColor } from '@/hooks/changThemeColor';
import pinia from './stores';

export function createApp() {
  const app = createSSRApp(App);
  app.use(pinia as any)
  useThemeColor();

  return {
    app,
  };
}
