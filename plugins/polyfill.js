/**
 * @file polyfill / ES module
 * @module plugins/polyfill
 * @author Jack <https://github.com/linyj1130>
 */

import { isBrowser } from '~/environment'
import 'intersection-observer'

if (isBrowser) {
  // windows.xxx = xxx
}
