import { Product } from '@/modules/client'

export interface CartItem {
  product: Product,
  amount: number,
}

export interface Cart {
  items: CartItem[],
}
