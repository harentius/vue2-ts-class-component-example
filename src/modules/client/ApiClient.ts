export default class ApiClient {
  constructor(
    private baseUrl: string,
  ) {
  }

  public async getProducts(limit: number = 10) {
    const result = await fetch(`${this.baseUrl}/products?limit=${limit}`);

    return result.json();
  }
}
