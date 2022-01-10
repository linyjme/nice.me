/**
 * @file Outside
 * @module service.outside
 * @author Surmon <https://github.com/surmon-china>
 */

export const getGAScriptURL = (measurementID: string) => {
  return `https://www.googletagmanager.com/gtag/js?id=${measurementID}`
}
