const initialItems = [
  { id: 1, description: 'Passports', quantity: 2, packed: false },
  { id: 2, description: 'Socks', quantity: 12, packed: true },
  { id: 3, description: 'Charger', quantity: 1, packed: false },
];

const App = () => {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
};

const Logo = () => {
  return <h1>🌴 Far Away 🚗</h1>;
};

const Form = () => {
  return (
    <form className="add-form">
      <h3>What do you need for your trip, bud? 😉</h3>
      <select>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input type="text" placeholder="Item..."></input>
      <button>Add</button>
    </form>
  );
};

const PackingList = () => {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
};

const Item = ({ item }) => {
  return (
    <li>
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {`${item.quantity}
        ${item.description}`}
      </span>
      <button>❌</button>
    </li>
  );
};

const Stats = () => {
  return (
    <footer className="stats">
      💼<em>You have X items on your list, and you already packed X(X%).</em>
    </footer>
  );
};

export default App;
