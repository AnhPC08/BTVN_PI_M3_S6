import { useState } from "react";

export default function SmartCounter() {
  const [count, setCount] = useState(0);

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <div data-testid="count-display">{count}</div>
      <button onClick={() => setCount(count + 1)}>Tăng</button>
      <button onClick={handleDecrement}>Giảm</button>
    </div>
  );
}
