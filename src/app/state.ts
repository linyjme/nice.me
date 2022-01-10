/**
 * @file App local global state
 * @module app.state
 * @author Surmon <https://github.com/surmon-china>
 */

import { App, inject, ref, computed, reactive, readonly } from 'vue'
import { INVALID_ERROR } from '/@/constants/error'
import { LayoutColumn } from '/@/services/layout'
import { uaParser, isZhUser } from '/@/transforms/ua'
import { universalRef, onClient } from '/@/universal'

type RenderErrorValue = RenderError | null
export interface RenderError {
  code: number
  message: string
}

export enum ImageExt {
  WebP = 'webp',
  Jpg = 'jpeg'
}

export interface GlobalRawState {
  renderError: RenderErrorValue
  userAgent: string
  language: string
  layout: LayoutColumn
}

export interface GlobalStateConfig {
  userAgent: string
  language: string
  layout: LayoutColumn
}

const GlobalStateSymbol = Symbol('globalState')
export type GlobalState = ReturnType<typeof createGlobalState>
export const createGlobalState = (config: GlobalStateConfig) => {
  // Render error
  const renderError = universalRef<RenderErrorValue>('error', () => null)
  const defaultError = { code: INVALID_ERROR }
  const setRenderError = (error: any) => {
    onClient(() => {
      console.warn('App error:', error)
    })
    if (!error) {
      // clear error
      renderError.value = null
    } else if (error instanceof Error) {
      // new Error
      renderError.value = {
        code: (error as any).code ?? defaultError.code,
        message: error.message
      }
    } else if (typeof error === 'string') {
      // error message
      renderError.value = {
        ...defaultError,
        message: error
      }
    } else {
      // error object -> axios | component
      renderError.value = {
        ...error,
        code: error.status || error.status || defaultError.code
      }
    }
  }

  // Hydrated
  const isHydrated = ref(false)
  const setHydrate = () => {
    isHydrated.value = true
  }

  // UserAgent & device info
  const userAgent = reactive({
    original: config.userAgent,
    language: config.language,
    isZhUser: isZhUser(config.language),
    ...uaParser(config.userAgent)
  })
  const setUserAgent = (_userAgent: string) => {
    userAgent.original = _userAgent
    Object.assign(userAgent, uaParser(config.userAgent))
  }
  const setLanguage = (_language: string) => {
    userAgent.language = _language
    userAgent.isZhUser = isZhUser(_language)
  }

  // UI layout
  const layoutValue = ref(config.layout)
  const layoutColumn = computed(() => ({
    layout: layoutValue.value,
    isNormal: layoutValue.value === LayoutColumn.Normal,
    isWide: layoutValue.value === LayoutColumn.Wide,
    isFull: layoutValue.value === LayoutColumn.Full
  }))
  const setLayoutColumn = (layout: LayoutColumn) => {
    if (layout !== layoutValue.value) {
      layoutValue.value = layout
    }
  }

  // Aliyun OSS: https://oss.console.aliyun.com/bucket/oss-cn-hangzhou/surmon-static/process/img
  // MARK: 微信/Safari/移动端无法精确判断兼容性，使用 jpg 格式
  const imageExt = computed(() => {
    const imageExtValue =
      userAgent.isMobile || userAgent.isWechat || userAgent.isSafari
        ? (ImageExt.Jpg as ImageExt)
        : (ImageExt.WebP as ImageExt)
    return {
      ext: imageExtValue,
      isJpg: imageExtValue === ImageExt.Jpg,
      isWebP: imageExtValue === ImageExt.WebP
    }
  })

  // Switchers
  const switchBox = reactive({
    wallpaper: false,
    sponsorModal: false
  })

  // export state
  const toRawState = (): GlobalRawState => ({
    renderError: renderError.value,
    userAgent: userAgent.original,
    language: userAgent.language,
    layout: layoutValue.value
  })

  const globalState = {
    toRawState,
    // Render error state
    renderError: readonly(renderError),
    setRenderError,
    // Hydrate state
    isHydrated: readonly(isHydrated),
    setHydrate,
    // Layout state
    layoutColumn,
    setLayoutColumn,
    // Device state
    userAgent: readonly(userAgent),
    imageExt,
    // switch
    switchBox: readonly(switchBox),
    switchTogglers: {
      sponsorModal() {
        switchBox.sponsorModal = !switchBox.sponsorModal
      },
      wallpaper() {
        switchBox.wallpaper = !switchBox.wallpaper
      }
    }
  }

  return {
    ...globalState,
    install(app: App) {
      app.provide(GlobalStateSymbol, globalState)
    }
  }
}

export const useGlobalState = (): GlobalState => {
  return inject(GlobalStateSymbol) as GlobalState
}
