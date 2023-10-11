const express = require('express');
const bodyParser = require('body-parser');
const app = express();
 const port = 4000;
// Sample data (in-memory database)
let items = [
  { id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
];

app.use(bodyParser.json());

// GET all items
app.get('/items', (req, res) => {
  res.json(items);
});

// GET a single item by ID
app.get('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const item = items.find((item) => item.id === id);
  if (!item) { res.status(404).json({ message: 'Item not found' });
  } else { res.json(item); }
});

// POST (create) a new item
app.post('/items', (req, res) => {
  const newItem = req.body;
  items.push(newItem);
  res.status(201).json(newItem);
});

// PUT (update) an item by ID
app.put('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedItem = req.body;
  const index = items.findIndex((item) => item.id === id);

  if (index === -1) {
    res.status(404).json({ message: 'Item not found' });
  } else {
    items[index] = { id, ...updatedItem };
    res.json(items[index]);
  }
});

// DELETE an item by ID
app.delete('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = items.findIndex((item) => item.id === id);

  if (index === -1) {
    res.status(404).json({ message: 'Item not found' });
  } else {
    const deletedItem = items.splice(index, 1);
    res.json(deletedItem[0]);
  }
});

// Start the server
app.listen(4000, () => {
  console.log(`Server is running on port ${port}`);
});
