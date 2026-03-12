// import request from '@/utils/request'
import { CapacitorHttp } from '@capacitor/core'
// interface ApiResult<T> {
//   code: number
//   msg: string
//   data: T
// }

// 获取模板信息
export async function queryLosaTemplate(ip: string): Promise<any> {
  // return request('/app/sync/info', {
  //   baseURL: `https://${ip}`,
  // })
  return await CapacitorHttp.get({
    url: `http://${ip}/app/sync/info`,
  })
}

// 上传模板
export async function uploadLosaTemplate(ip: string, data: any): Promise<any> {
  // return request('/app/sync/uploadInfo', {
  //   baseURL: `https://${ip}`,
  //   method: 'post',
  //   data,
  // })
  return await CapacitorHttp.post({
    url: `http://${ip}/app/sync/uploadInfo`,
    headers: {
      'Content-Type': 'application/json',
    },
    data,
  })
}
