import Item from "./Item";

const ItemList = ({ items, onDelete, onUpdate }) => {
  return (
    <div>
      {items.map((item) => (
        <Item key={item.id} item={item} onDelete={onDelete} onUpdate={onUpdate} />
      ))}
    </div>
  );
};

export default ItemList;
