import en from './locales/en.json'
import zhCN from './locales/zh-CN.json'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en,
    zhCN,
  },
}))
