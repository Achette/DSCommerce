import { AxiosRequestConfig } from 'axios'
import { requestBackend } from '../utils/requests'

export const ApiProducts = {
  getAll: async (page: number, name: string, size = 12, sort = 'name') => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/products',
      params: {
        page,
        name,
        size,
        sort,
      },
    }

    // const response = await axios.get(`${BASE_URL}/products?`);
    return requestBackend(config)
  },

  getById: async (id: number) => {
    return requestBackend({ url: `/products/${id}` })
  },
}
