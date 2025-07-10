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
  return <h1>✈️Close Enough🛤️</h1>;
}

function Form() {
  return (
    <div class="add-form">
      <h3>What do you need for the trip?</h3>
    </div>
  );
}

function PackingList() {
  return <div className="list">LIST</div>;
}

function Stats() {
  return (
    <footer>
      <em>You have X items on your list, and you already packed X (X%)</em>
    </footer>
  );
}
