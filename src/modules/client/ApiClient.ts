import { Product } from './types'

export default class ApiClient {
  constructor (
    private baseUrl: string
  ) { }

  public async getProducts (limit = 10): Promise<Product[]> {
    const result = await fetch(`${this.baseUrl}/products?limit=${limit}`)

    return result.json()
  }
}
