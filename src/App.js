import { useState } from "react";
import { compare } from "./versionUtil";
import "./App.css";

function App() {
  const [versionA, setVersionA] = useState("");
  const [versionB, setVersionB] = useState("");
  const [result, setResult] = useState(0);

  const handleCompare = (event) => {
    const result = compare(versionA, versionB);
    setResult(result);
    event.preventDefault();
  };

  return (
    <div className="App">
      <h1>Compare Version</h1>
      <main>
        <form onSubmit={handleCompare} className="form">
          <label htmlFor="versionA">Enter input #1</label>
          <input
            id="versionA"
            name="versionA"
            type="text"
            value={versionA}
            onChange={(event) => setVersionA(event.target.value)}
          />
          <br />
          <label htmlFor="versionB">Enter input #2</label>
          <input
            id="versionB"
            name="versionB"
            type="text"
            value={versionB}
            onChange={(event) => setVersionB(event.target.value)}
          />
          <br />
          <input type="submit" value="Compare" />
        </form>

        <div className="result">Result is: {result}</div>
      </main>
    </div>
  );
}

export default App;
