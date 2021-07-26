
function ItemDetail({title, description, price, url}) {
  return (
<div className="card">
  <img src={url}   className="img-thumbnail" alt="gorra" />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p>{price}</p>
</div>
<button type="button" className="btn btn-sm btn-outline-secondary">Comprar</button>
</div>

  )
}


export default ItemDetail

