import { useState } from "react";

function PickColor() {
  const [color, setColor] = useState("");
  return (
    <div className="container">
      <h1>
        My favorite color is{" "}
        <span style={{ color: `${color}`, backgroundColor: "black" }}>
          {color}
        </span>
      </h1>

      <button onClick={() => setColor("white")}>white</button>
      <button onClick={() => setColor("red")}>red</button>
      <button onClick={() => setColor("orange")}>orange</button>
    </div>
  );
}

export default PickColor;
