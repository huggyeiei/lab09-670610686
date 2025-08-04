import { useState } from "react";

export default function CounterPage() {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount(count + 1);
  };
  return (
    <div className="container text-center">
      <h2>Counter Page</h2>
      <p>Counter:{count}</p>
      <button onClick={increaseCount}>Increase</button>
    </div>
  );
}
//