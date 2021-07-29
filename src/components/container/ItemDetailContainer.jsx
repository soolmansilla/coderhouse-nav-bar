import React, {useState, useEffect } from "react";
import ItemDetail from './ItemDetail';
import { getItems } from './getItems' // export


function ItemDetailContainer() {
     const [itemDetail, setItemDetail] = useState({});

    useEffect(() => {   
         getItems()
         .then(resp =>setItemDetail(resp))
      }, []);   

      console.log(itemDetail)
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      <ItemDetail item={itemDetail} /> 
    </div>
  )
}



export default ItemDetailContainer
