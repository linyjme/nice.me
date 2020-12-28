/**
 * @file App universal
 * @module app/universal
 * @author Linyj <https://github.com/Linyj>
 */

import { isServer, isClient } from '/@/environment'
export * from './context'
export * from './prefetch'

// env only
export const onClient = (callback: any) => {
  isClient && callback()
}

export const onServer = (callback: any) => {
  isServer && callback()
}

