/**
 * @file Adsense box component / ES module
 * @module components/adsense
 * @author Jack <https://github.com/linyj1130>
 */

import AdsenseArchive from './archive'
import AdsenseArchiveMobile from './archive-mobile'
import AdsenseCommonResponsive from './responsive'

export default {
  install(Vue) {
    [
      AdsenseArchive,
      AdsenseArchiveMobile,
      AdsenseCommonResponsive
    ].forEach(component => Vue.component(component.name, component))
  }
}
