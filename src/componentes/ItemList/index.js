//mapear productos y devolver uno

import React from 'react'
import Item from '../Item'

const ItemList = ({items}) => {
    return (
        <>
        {items.map((item) => {return <Item key={item.id} item= {items}/>})}
        </>

    )
}



export default ItemList