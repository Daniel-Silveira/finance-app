import { useQuery } from 'react-query'
import http from '../../services/api'

export const useGet = <T = unknown>(cacheName: string, urlRequest: string) => {
  const { data, error, isFetching } = useQuery<T>(
    cacheName,
    async () => {
      const { data } = await http.get(urlRequest)
      return data
    },
    {
      staleTime: 1000 * 60, // 1 minute
    }
  )
  return { data, error, isFetching }
}
