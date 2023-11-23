import { useState } from "react";

function App() {
  return (
    <div>
      <Effect />
    </div>
  );
}
const Effect = () => {
  const [result, setResult] = useState(0);

  return (
    <div>
      <h1>the number is {result}</h1>

      <button onClick={() => setResult(result + 1)}>+</button>
      <button onClick={() => setResult(result - 1)}>-</button>
    </div>
  );
};
export default App;
