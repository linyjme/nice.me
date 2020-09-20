/**
 * @file UA 解析器 / ES module
 * @module transforms/ua
 * @author Jack <https://github.com/linyj1130>
 */

import parser from 'ua-parser-js'

export const uaParser = (userAgent: string) => {
  const parseResult = (parser as $TODO)(userAgent || '')
  const browserName = String(parseResult.browser.name).toLowerCase()
  const isBrowser = (browsers: string[]) => {
    return browsers.some(browser => browser.toLowerCase() === browserName)
  }

  return {
    result: parseResult,
    isIE: isBrowser(['compatible', 'MSIE', 'IE']),
    isEdge: isBrowser(['Edge']),
    isFirefox: isBrowser(['Firefox']),
    isChrome: isBrowser(['Chrome', 'Chromium']),
    isSafari: isBrowser(['Safari']),
    isWechat: isBrowser(['Wechat']),
    isIos: parseResult.os.name === 'iOS',
    isAndroid: parseResult.os.name === 'Android',
    isMobile: parseResult.device.type === 'mobile'
  }
}
