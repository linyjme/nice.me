/**
 * @file vue-awesome-swiper
 * @module hooks
 * @author Linyj <https://github.com/Linyj>
 */

import { inject } from 'vue'
import { SwiperSymbol } from './constants'

export const useSwiper = () => {
  return inject(SwiperSymbol)
}
