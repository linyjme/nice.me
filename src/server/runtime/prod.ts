import fs from 'fs'
import path from 'path'
import { Express } from 'express'
import { DIST_PATH, PRDO_SERVER_PATH } from '../helper'
import { resolveTemplate } from './template'
import type { RenderResult } from '@/ssr'

export const enableProdRuntime = async (app: Express) => {
  const template = fs.readFileSync(path.resolve(DIST_PATH, 'template.html'), 'utf-8')
  const { renderApp, renderError } = require(path.resolve(PRDO_SERVER_PATH, 'ssr.js'))

  app.use('*', async (request, response) => {
    try {
      const redered: RenderResult = await renderApp(request)
      response
        .status(redered.code)
        .set({ 'Content-Type': 'text/html' })
        .end(
          resolveTemplate({
            template,
            appHTML: redered.html,
            metas: redered.metas,
            scripts: redered.scripts
          })
        )
    } catch (error: any) {
      const redered: RenderResult = await renderError(request, error)
      response.status(redered.code).end(
        resolveTemplate({
          template,
          appHTML: redered.html,
          metas: redered.metas,
          scripts: redered.scripts
        })
      )
    }
  })
}
