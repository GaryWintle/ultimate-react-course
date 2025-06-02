export const Stats = ({ items }) => {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some junk to your trunk! 🥳</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const numPercentPacked = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {numPercentPacked === 100
          ? "Bro! You're all packed and ready to vamoos! ✈"
          : `💼 You have ${numItems} items on your list, and you already packed 
        ${numPacked} (${numPercentPacked}%).`}
      </em>
    </footer>
  );
};
