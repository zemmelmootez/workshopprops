import React from 'react'
import PlaceItem from './PlaceItem'

function PlacesList({items}) {
  return (
    <div style={{padding:"7vw" , display:"flex" , justifyContent:"center",gap:"2vw"}}>
       {items.map(e=><PlaceItem item={e}></PlaceItem>)}
    </div>
  )
}

export default PlacesList
