/**
 * @file i18n interface / ES module
 * @module interfaces/http
 * @author Jack <https://github.com/linyj1130>
 */

interface Ii18nItem {
  [key: string]: Ii18nItem | {
    zh: string,
    en: string
  }
}

export interface Ii18nConfig {
  default: string,
  languages: Array<{
    code: string,
    iso: string,
    name: string,
  }>,
  data: Ii18nItem
}
