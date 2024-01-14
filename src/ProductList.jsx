import React from 'react'
import ProductItem from './ProductItem'

function ProductList({list,showMessage}) {
  return (
    <div>
      <h1>This is product List</h1>
     
     <div style={{display:"flex",gap:"4vw" ,flexWrap:"wrap", padding:"5vw", justifyContent:"center"}}>
      {list.map(e=><ProductItem showMessage={showMessage} item={e} ></ProductItem>)}

      </div>
    </div>
  )
}

export default ProductList
