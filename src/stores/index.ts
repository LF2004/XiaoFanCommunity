import { createPinia } from 'pinia'
// @ts-ignore
import persist from 'pinia-plugin-persistedstate'
// 创建pinia实例
const pinia = createPinia()
// @ts-ignore
pinia.use(persist)
// 导出pinia实例，给main使用
export default pinia
// 模块统一导出

export * from './modules/userInfo';
export * from './modules/userLoginManner';
export * from './modules/AccentColor';
export * from './modules/plate';
export * from './modules/ThemeColor';
export * from './modules/editor';
