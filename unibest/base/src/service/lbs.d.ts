export interface ILbsItem {
  status: number
  message: string
  request_id: string
  result: object
  similarity: number
  deviation: number
  reliability: number
  level: number
}
