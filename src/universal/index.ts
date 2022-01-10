/**
 * @file App universal
 * @module universal
 * @author Surmon <https://github.com/surmon-china>
 */

import { isServer, isClient } from '/@/app/environment'
export * from './context'
export * from './ref'
export * from './prefetch'

// env only
export const onClient = (callback: any) => {
  isClient && callback()
}

export const onServer = (callback: any) => {
  isServer && callback()
}
