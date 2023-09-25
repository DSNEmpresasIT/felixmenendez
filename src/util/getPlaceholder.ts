import { ProductTypes } from "./types";

export function getPlaceholder(productTypes: string[]) {
  if (
    productTypes.includes(ProductTypes.FERTILIZANTES_LIQUIDOS) || 
    productTypes.includes(ProductTypes.FERTILIZANTES_LIQUIDOS_HERBICIDAS) || 
    productTypes.includes(ProductTypes.FERTILIZANTES_SOLUBLES )
  ) {
    return 'solubles'
  }

  return 'granulados';
}