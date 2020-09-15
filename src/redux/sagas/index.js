


import { 
   watchGetProducts, 
   watchPostProduct, 
   watchDeleteProduct } 
   from './ProductSaga';

import { 
   watchGetCategories, 
   watchPostCategories, 
   watchDeleteCategories, 
   watchEditCategory, 
   watchCancelCategoryUpdate, 
   watchPutCategories } 
   from './CategorySaga'

import { 
   watchGetOrders, 
   watchPostOrder } 
   from './OrderSaga'

export default function* () {
  yield [
    watchGetProducts(),
    watchPostProduct(),
    watchDeleteProduct(),
    watchGetCategories(),
    watchPostCategories(),
    watchDeleteCategories(),
    watchEditCategory(),
    watchCancelCategoryUpdate(),
    watchPutCategories(),
    watchGetOrders(),
    watchPostOrder()
  ]
  console.log('loaded')
}