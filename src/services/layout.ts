/**
 * @file app layout updater
 * @module service/layout
 * @author Linyj <https://github.com/Linyj>
 */

import { RouteMeta } from 'vue-router'

export enum LayoutColumn {
  Normal = 0,
  Wide = 1,
  Full = 2, // not used
  Page = 3
}

export const getLayoutByRouteMeta = (routeMeta: RouteMeta) => {
  return routeMeta.layout === LayoutColumn.Wide
    ? LayoutColumn.Wide
    : routeMeta.layout === LayoutColumn.Full
      ? LayoutColumn.Full
      : routeMeta.layout === LayoutColumn.Page
        ? LayoutColumn.Page
        : LayoutColumn.Normal
}
