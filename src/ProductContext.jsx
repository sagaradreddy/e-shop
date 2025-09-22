import {createContext} from 'react'
import CategoryApi from './API/CategoryApi'
import ProductApi from './API/ProductApi'

 export const ProductContext = createContext()

function ProductProvider (props) {

    const data ={
      categoryApi:CategoryApi(),
      productApi:ProductApi()
    }
    console.log('data', data)
  return (
   <ProductContext.Provider value={data} >
        {props.children}

   </ProductContext.Provider>
  )
}

export default ProductProvider
