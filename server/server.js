const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let inventory = [
  { id: 1, name: "Laptop", category: "Electronics", quantity: 12, price: 899.99 },
  { id: 2, name: "Monitor", category: "Electronics", quantity: 8, price: 199.99 },
  { id: 3, name: "Keyboard", category: "Accessories", quantity: 25, price: 49.99 }
];

app.get("/", (req, res) => {
  res.send("Inventory API is running");
});

app.get("/api/inventory", (req, res) => {
  res.json(inventory);
});

app.post("/api/inventory", (req, res) => {
  const { name, category, quantity, price } = req.body;

  if (!name || !category || quantity === undefined || price === undefined) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const newItem = {
    id: inventory.length + 1,
    name,
    category,
    quantity: Number(quantity),
    price: Number(price)
  };

  inventory.push(newItem);
  res.status(201).json(newItem);
});

app.put("/api/inventory/:id", (req, res) => {
  const itemId = Number(req.params.id);
  const itemIndex = inventory.findIndex((item) => item.id === itemId);

  if (itemIndex === -1) {
    return res.status(404).json({ message: "Item not found" });
  }

  inventory[itemIndex] = {
    ...inventory[itemIndex],
    ...req.body
  };

  res.json(inventory[itemIndex]);
});

app.delete("/api/inventory/:id", (req, res) => {
  const itemId = Number(req.params.id);
  inventory = inventory.filter((item) => item.id !== itemId);
  res.json({ message: "Item deleted successfully" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

