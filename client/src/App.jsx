import { useEffect, useState } from "react";
import "./styles.css";

function App() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    quantity: "",
    price: ""
  });

  useEffect(() => {
    fetchInventory();
  }, []);

  const fetchInventory = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/inventory");
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.error("Error fetching inventory:", error);
    }
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.name || !formData.category || !formData.quantity || !formData.price) {
      alert("Please fill out all fields.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/inventory", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error("Failed to add item");
      }

      setFormData({
        name: "",
        category: "",
        quantity: "",
        price: ""
      });

      fetchInventory();
    } catch (error) {
      console.error("Error adding inventory item:", error);
    }
  };

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <header>
        <h1>Inventory Dashboard</h1>
        <p>Manage product records using a React front end and Express API.</p>
      </header>

      <section className="card">
        <h2>Add Inventory Item</h2>
        <form onSubmit={handleSubmit} className="form">
          <input
            name="name"
            placeholder="Product name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
          />
          <input
            name="quantity"
            type="number"
            placeholder="Quantity"
            value={formData.quantity}
            onChange={handleChange}
          />
          <input
            name="price"
            type="number"
            step="0.01"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
          />
          <button type="submit">Add Item</button>
        </form>
      </section>

      <section className="card">
        <h2>Inventory Records</h2>
        <input
          className="search"
          placeholder="Search by product or category..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.quantity}</td>
                <td>${item.price.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default App;
