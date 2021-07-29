import { useState, useEffect } from "react";
import Item from "./Item";
import {useParams} from 'react-router-dom';
function ItemList() {
  const [itemList, setItemList] = useState([]);
  const {categoryId} = useParams();

  useEffect(() => {
    let arrayItems = [
      { title: 'Gorra Gris',
      price: 123,
      description: 'descripcion del producto',
      url: 'https://static4.depositphotos.com/1000261/339/i/600/depositphotos_3394871-stock-photo-red-baseball-cap.jpg',
       categoria:'hombre' },
      {  title: 'Gorra Gris',
      price: 123,
      description: 'descripcion del producto',
      url: 'https://static4.depositphotos.com/1000261/339/i/600/depositphotos_3394871-stock-photo-red-baseball-cap.jpg'
      , categoria:'mujer'},
      {  title: 'Gorra Gris',
      price: 123,
      description: 'descripcion del producto',
      url: 'https://static4.depositphotos.com/1000261/339/i/600/depositphotos_3394871-stock-photo-red-baseball-cap.jpg'
      , categoria:'ninios' },
      {  title: 'Gorra Gris',
      price: 123,
      description: 'descripcion del producto',
      url: 'https://static4.depositphotos.com/1000261/339/i/600/depositphotos_3394871-stock-photo-red-baseball-cap.jpg' ,
      categoria:'hombre'}
    ];


    const task = new Promise(resuelto => {
        setTimeout(() => {
          resuelto(arrayItems);
        }, 1000);
    });

        categoryId 
        ? task.then(resp =>{
          setItemList(resp.filter(it => it.categoria === categoryId));
        })
        : 
        task.then(resp => {
          setItemList(resp);
        });

  }, [categoryId]);
 console.log(categoryId);
  return (
  <>
      {itemList.map(obj => (
      
        <Item elements={obj} />

      
      ))}
   </>
  );
}

export default ItemList;
