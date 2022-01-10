/**
 * @file Route transformer
 * @module transformer.route
 * @author Surmon <https://github.com/surmon-china>
 */

import { RouteName, CategorySlug } from '/@/app/router'

type RouteRecordName = string | symbol | null | undefined

export const getTagFlowRoute = (tagSlug: string) => {
  return `/tag/${tagSlug}`
}

export const getCategoryFlowRoute = (categorySlug: string | CategorySlug) => {
  return `/category/${categorySlug}`
}

export const getDateFlowRoute = (date: string) => {
  return `/date/${date}`
}

export const getArticleDetailRoute = (articleID: string | number) => {
  return `/article/${articleID}`
}

export const getPageRoute = (routeName: RouteName) => {
  return `/${routeName}`
}

export const isArticleDetail = (name: RouteRecordName) => name === RouteName.Article
export const isSearchFlow = (name: RouteRecordName) => name === RouteName.SearchFlow
export const isGuestbook = (name: RouteRecordName) => name === RouteName.Guestbook
export const isFreelancer = (name: RouteRecordName) => name === RouteName.Freelancer
export const isMusic = (name: RouteRecordName) => name === RouteName.Music
export const isApp = (name: RouteRecordName) => name === RouteName.App
