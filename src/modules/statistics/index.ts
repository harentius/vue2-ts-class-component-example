import { eventBus } from '@/eventBus'
import { Product } from '../client'

eventBus.$on('PRODUCT_CLICK', (product: Product) => {
  console.warn(`Sending statistics about interes to product with id '${product.id}'`)
  window.open(product.image, '_blank')
})
