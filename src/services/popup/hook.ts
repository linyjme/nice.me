/**
 * @file popup hook
 * @module service/popup/hook
 * @author Linyj <https://github.com/Linyj>
*/

import { inject, onMounted } from 'vue'
import { PopupSymbol } from './constant'
import type { Popup } from '.'

export const usePopup = (): Popup => {
  return inject(PopupSymbol) as Popup
}

export const usePopupWithRoot = (fn: () => HTMLElement): Popup => {
  const popup = usePopup()
  onMounted(() => popup.$setRoot(fn()))
  return popup
}
