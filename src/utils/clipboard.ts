/**
 * @file Clipboard util
 * @module util/clipboard
 * @author Linyj <https://github.com/Linyj>
 */

declare global {
  interface Window {
    $isCopyFromApp: boolean
  }
}

export const read = () => navigator.clipboard.readText()
export const copy = (text: string) => {
  window.$isCopyFromApp = true
  navigator.clipboard.writeText(text).finally(() => {
    window.$isCopyFromApp = false
  })
}

export default { copy, read }
