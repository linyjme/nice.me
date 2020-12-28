/**
 * @file sticky event hack lib
 * @module service/sticky
 * @author Linyj <https://github.com/Linyj>
 */

import StickyEvents from 'sticky-events'

declare global {
  interface Window {
    $StickyEvents: any
  }
}

export const exportStickyEventsToGlobal = () => {
  window.$StickyEvents = StickyEvents
}
