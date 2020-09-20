/**
 * @file Filters / ES module
 * @module filters/index
 * @author Jack <https://github.com/linyj1130>
 */

import { textOverflow, firstUpperCase } from '~/transformers/text'
import { timeAgo, toYMD, toLocalString } from '~/transformers/time'
import { getFileCDNUrl, getFileProxyUrl } from '~/transformers/url'

export default {
  textOverflow,
  firstUpperCase,
  timeAgo,
  toYMD,
  toLocalString,
  byCDN: getFileCDNUrl,
  byProxy: getFileProxyUrl
}
