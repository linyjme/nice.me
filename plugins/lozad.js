/**
 * @file 懒加载 / ES module
 * @module plugins/lozad
 * @author Jack <https://github.com/linyj1130>
 */

import lozad from 'lozad'
import { isBrowser } from '~/environment'

if (isBrowser) {
  window.lozad = lozad
}

export default lozad
