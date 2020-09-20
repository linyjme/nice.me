/**
 * @file Route transformer / ES module
 * @module transforms/route
 * @author Jack <https://github.com/linyj1130>
 */

export const getArticleDetailRoute = (articleID: string | number) => {
  return `/article/${articleID}`
}
