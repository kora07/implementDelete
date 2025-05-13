import { useEffect, useState } from "react";
import ItemList from "./components/ItemList";

const API_URI = `http://${import.meta.env.VITE_API_URI}/doors`;

function App() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  const fetchItems = async () => {
    try {
      const response = await fetch(API_URI);
      const data = await response.json();
      setItems(data);
    } catch (err) {
      setError("Failed to fetch items");
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const deleteItem = async (id) => {
    try {
      const res = await fetch(`${API_URI}/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete");
      setItems((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      setError("Error deleting item");
    }
  };

  const updateItem = async (id, newData) => {
    try {
      const res = await fetch(`${API_URI}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newData),
      });
      if (!res.ok) throw new Error("Failed to update");
      const updatedItem = await res.json();
      setItems((prev) =>
        prev.map((item) => (item.id === id ? updatedItem : item))
      );
    } catch (err) {
      setError("Error updating item");
    }
  };

  return (
    <>
      <h1>🚪 Door List</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ItemList items={items} onDelete={deleteItem} onUpdate={updateItem} />
    </>
  );
}

export default App;
