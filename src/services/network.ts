/**
 * @file Network
 * @module service/network
 * @author Linyj <https://github.com/Linyj>
 */

import axios from 'axios'

export const ping = (url: string) => {
  return axios.request({
    url,
    method: 'get',
    timeout: 1888
  })
}

export const isOutsideOfGFW = () => ping('https://www.google.com.hk')
