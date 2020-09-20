/**
 * @file Url transformer / ES module
 * @module transforms/url
 * @author Jack <https://github.com/linyj1130>
 */

import apiConfig from '~/config/api.config'
import { getArticleDetailRoute } from '~/transformers/route'

export const getFileCDNUrl = (uri: string) => {
  return `${apiConfig.CDN}${uri}`
}

export const getFileProxyUrl = (uri: string) => {
  return `${apiConfig.PROXY}${uri}`
}

export const getPageUrl = (uri: string) => {
  return `${apiConfig.FE}${uri}`
}

export const getArticleDetailPageUrl = (articleID: string | number) => {
  return getPageUrl(getArticleDetailRoute(articleID))
}
