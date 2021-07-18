import ItemCount from "./ItemCount";

const handleCount=(cant)=>{
 alert('agregaste '+ cant)
}

 const ItemListContainer = ({greeting}) => {
    return (
        <div>
            <h1>{greeting}</h1>
            <ItemCount stock={5} initial={1} onAdd={handleCount} />
        </div>
    );
}

export default ItemListContainer;
