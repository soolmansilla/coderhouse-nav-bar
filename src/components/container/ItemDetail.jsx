
function ItemDetail({item={}}) {
  return (
<div className="card">
  <img src={item.url}   className="img-thumbnail" alt="gorra" />
  <div className="card-body">
    <h5 className="card-title">{item.title}</h5>
    <p className="card-text">{item.description}</p>
    <p>{item.price}</p>
</div>
<button type="button" className="btn btn-sm btn-outline-secondary">Comprar</button>
</div>

  )
}


export default ItemDetail

