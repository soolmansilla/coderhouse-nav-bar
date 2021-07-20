
const Item = ({ elements }) => {
    return (
        <div>
            <li>{elements.name}</li>
            <li>{elements.precio}</li>
        </div>
    );
}

export default Item;
