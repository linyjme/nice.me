/**
 * @file emoji 表情雨服务
 * @module service/emoji-233333
 * @author Linyj <https://github.com/Linyj>
 */

import Emoji233333 from 'emoji-233333'

declare global {
  interface Window {
    $Emoji233333: any
  }
}

export const exportEmojiRainToGlobal = () => {
  window.$Emoji233333 = Emoji233333
}