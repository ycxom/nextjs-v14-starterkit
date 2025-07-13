import { getRequestConfig } from 'next-intl/server'
import { notFound } from 'next/navigation'

export const locales = ['en', 'fr', 'ja', 'de', 'ru', 'es', 'fa', 'ar', 'zh-CN']

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound()

  return {
    locale, // 添加了这一行来修复配置问题
    messages: (await import(`../messages/${locale}.json`)).default
  }
})
