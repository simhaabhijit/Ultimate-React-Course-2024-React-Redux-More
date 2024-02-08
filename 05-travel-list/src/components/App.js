import { useState } from 'react';
import Logo from './Logo';
import Form from './Form';
import PackingList from './PackingList';
import Stats from './Stats';

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
//   { id: 3, description: "Charger", quantity: 1, packed: true },
// ];

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [item, ...items]);
  }

  function handleToggleItem(id) {
    setItems((items) => items.map(item => item.id === id
      ? { ...item, packed: !item.packed } : item));
    // console.log(items);
  }

  function handleDeleteItem(id) {
    // console.log(id);
    setItems((items) => items.filter(item => item.id !== id));
    console.log(items);
  }

  function handleClearList() {
    const confirmed = window.confirm('Are you sure you want to delete all items?');

    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem} onClearList={handleClearList} />
      <Stats items={items} />
    </div>
  );
}
