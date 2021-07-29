import { useState } from "react";

function ItemCount({ initial, stock, onAdd }) {
  const [cantidad, setCantidad] = useState(initial);
  const handleAdd = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  const handleRemove = () => {
    if (cantidad > initial) {
      setCantidad(cantidad - 1);
    }
  };

  const handleOnAdd = () => {
    onAdd(cantidad)
  };

  return (
    <div className="card w-60">
      <div className="card-header">
        <h3>Cantidad {cantidad}</h3>
      </div>
      <div className="card-body">
        <button onClick={handleRemove}>-</button>
        <button className="btn brn-primary bnt-block" onClick={handleOnAdd}>Agregar</button>
        <button onClick={handleAdd}>+</button>
      </div>
    </div>
  );
}

export default ItemCount;
