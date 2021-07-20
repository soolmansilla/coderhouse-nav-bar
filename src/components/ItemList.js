import { useState, useEffect } from "react";
import Item from "./Item";

function ItemList() {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    let arrayItems = [
      { name: "gorra azul", precio: "00" },
      { name: "gorra celeste", precio: "200000" },
      { name: "gorra azul", precio: "20000" },
      { name: "gorra roja", precio: "2000" }
    ];

    const task = new Promise((resuelto, rechazado) => {
      let status = 200;
      if (status === 200) {
        setTimeout(() => {
          resuelto(arrayItems);
        }, 3000);
      } else {
        rechazado("rechazado");
      }
    });

    const getPromiseTask = () => {
      return task;
    };

    getPromiseTask()
      .then(resp => setItemList(resp))
      .catch(err => {
        console.log("un error");
      });
  }, []);
  console.log(itemList)
  return (
    <div>
      {itemList.map(obj => (
        <Item elements={obj} />
      ))}
    </div>
  );
}

export default ItemList;
