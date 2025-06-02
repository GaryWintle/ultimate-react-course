import { useState } from 'react';

export const Form = ({ onAddItems }) => {
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);

  const MAX_LENGTH = 20;

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    onAddItems(newItem);

    setDescription('');
    setQuantity(1);
  }

  // function handleItemTextLimit() {
  //   if(description.length > 50)

  // }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip, bud? 😉</h3>

      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option type="number" value={num} key={num}>
            {num}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        maxLength={MAX_LENGTH}
      ></input>
      {description.length < MAX_LENGTH ? (
        <button>Add</button>
      ) : (
        <button disabled style={{ backgroundColor: '#5a3e2b', color: '#fff' }}>
          Can't Add
        </button>
      )}
      <p
        style={description.length > 15 ? { color: '#ffd900' } : {}}
      >{`You have ${MAX_LENGTH - description.length} remaining characters.`}</p>
    </form>
  );
};
