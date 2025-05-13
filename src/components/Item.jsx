const Item = ({ item, onDelete }) => {
    const handleDelete = () => {
      onDelete(item.id);
    };
  
    return (
      <div
        style={{
          border: "1px solid #ccc",
          margin: "8px 0",
          padding: "8px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span>{item.name || `Door ${item.id}`}</span>
        <button onClick={handleDelete} style={{ backgroundColor: "red", color: "white" }}>
          Delete
        </button>
      </div>
    );
  };
  
  export default Item;
  