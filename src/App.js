const initialItems = [
  { id: 1, description: "Beers", quantity: 2, packed: false },
  { id: 2, description: "Phones", quantity: 12, packed: false },
  { id: 3, description: "Pants", quantity: 3, packed: true },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>✈️ Close Enough 🛤️</h1>;
}

function Form() {
  return (
    <div class="add-form">
      <h3>What do you need for the trip?</h3>
    </div>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>You have X items on your list, and you already packed X (X%)</em>
    </footer>
  );
}
