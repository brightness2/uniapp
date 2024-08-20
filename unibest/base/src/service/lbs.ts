import { http } from '@/utils/http'
import type { ILbsItem } from './lbs.d'
export { ILbsItem }

/**
 * 获取
 * @param address 地址
 * @returns
 */
export const getLocationAPI = (address: string) => {
  return http<ILbsItem>({
    url: `/lbs/getLocation`,
    method: 'GET',
    query: { address },
  })
}

/** post 请求 */
// export const postFooAPI = (name: string) => {
//   return http<ILbsItem>({
//     url: `/admin/login`,
//     method: 'POST',
//     query: { name }, // post 请求也支持 query
//     data: { name },
//   })
// }
