import {defineStore} from 'pinia'
import {ref} from 'vue'
// 定义 Store
export const EditortorStore = defineStore(
    'editorInfo',
    () => {
        const editor = ref('');

        const loadAtPersons = ref([])

        const setEditor = (val: any) => {
            editor.value = val
        }

        const changeEditorIndex = (val: any) => {
            editor.value = val
        }

        const clearEditor= () => {
            editor.value = ''
        }

        const clearLoadAtPersons = () => {
            loadAtPersons.value = []
        }

        const setLoadAtPersons = (val: any) => {
            // @ts-ignore
            loadAtPersons.value.push(val)
        }


        // 记得 return
        return {
            editor,
            loadAtPersons,
            setEditor,
            changeEditorIndex,
            setLoadAtPersons,
            clearEditor,
            clearLoadAtPersons
        }
    },
    {
        // @ts-ignore
        // 此配置支持小程序本地存储
        persist: {
            storage: {
                getItem(key: string) {
                    return uni.getStorageSync(key)
                },
                setItem(key: string, value: any) {
                    uni.setStorageSync(key, value)
                },
            },
        },
    },
)
