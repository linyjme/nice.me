/**
 * @file App exporter
 * @module service/exporter
 * @author Linyj <https://github.com/Linyj>
 */

import { App } from 'vue'

declare global {
  interface Window {
    $app: App
  }
}

export const exportAppToGlobal = (app: App) => {
  window.$app = app
}
