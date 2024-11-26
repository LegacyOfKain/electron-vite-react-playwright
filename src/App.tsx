import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Electron + Vite + React</h1>
      <div className="card">
        <Button count={count} setCount={setCount} />
      </div>
    </>
  );
}

export default App;
