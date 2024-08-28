import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import {useThemeColor} from "@/hooks/changThemeColor";
// 定义 Store
export const userThemeColorValStore = defineStore(
    'themeColor',
    () => {
        // 尝试从本地存储中获取主题颜色

        const initialThemeColorVal = uni.getStorageSync('themeColor') || ''; // 如果没有找到，则使用空字符串作为默认值


        const themeColorVal = ref(initialThemeColorVal);

        const setThemeColorVal = (val: any) => {
            themeColorVal.value = val;
            // 同时保存到本地存储
            uni.setStorageSync('themeColor', val);
        };

        // 清除主题颜色的函数（这里不需要 changeThemeColor，因为 setThemeColor 已经足够了）
        const clearThemeColor = () => {
            uni.removeStorageSync('themeColor');
            initialThemeColorVal.value = ''; // 可能还需要将 themeColor 重置为默认值
        };


        // 记得 return
        return {
            themeColorVal,
            setThemeColorVal,
            clearThemeColor,
        };
    },
    {
        // @ts-ignore
        // 此配置支持小程序本地存储
        persist: {
            storage: {
                getItem(key: string) {
                    return uni.getStorageSync(key) || ''; // 确保有一个默认值，防止 undefined
                },
                setItem(key: string, value: any) {
                    uni.setStorageSync(key, value);
                },
            },
        },
    },
);
