import { useState } from "react";

const Item = ({ item, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(item.name || "");

  const handleDelete = () => {
    onDelete(item.id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setEditedName(item.name || "");
    setIsEditing(false);
  };

  const handleSave = () => {
    onUpdate(item.id, { name: editedName });
    setIsEditing(false);
  };

  return (
    <div
      style={{
        border: "1px solid #ccc",
        margin: "8px 0",
        padding: "8px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
            style={{ flex: 1, marginRight: "10px" }}
          />
          <button onClick={handleSave} style={{ marginRight: "5px" }}>
            Save
          </button>
          <button onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <>
          <span>{item.name || `Door ${item.id}`}</span>
          <div>
            <button
              onClick={handleEdit}
              style={{ marginRight: "10px", backgroundColor: "lightblue" }}
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              style={{ backgroundColor: "red", color: "white" }}
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Item;
