import { en, type Key, type Dict } from "./en"
import { zh, t as translateZh } from "./zh"

export type { Key, Dict }
export { en, zh }

const lang = process.env.OPENCODE_LANG || "en"

export function t(key: Key): string {
  if (lang === "zh") {
    return translateZh(key)
  }
  return en[key] || key
}

export function i18n(key: Key): string {
  if (lang === "zh") {
    return translateZh(key)
  }
  return en[key] || key
}

export function getLang(): string {
  return lang
}

export const isZh = lang === "zh"
