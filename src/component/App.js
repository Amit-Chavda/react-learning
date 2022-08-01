import '../styles/App.css';
import { useState, useEffect } from "react";
import axios from "axios"

function App() {

  const [starWarsData, setStarWarsData] = useState({});
  const [count, setCount] = useState(1);

  useEffect(() => {
    axios.get("https://swapi.dev/api/people/"+count)
      .then((res) => {
        setStarWarsData(res.data)
        console.log(starWarsData)
      })
  }, [count]);
  return (
    <div className="App">
      <h2>Counter:{count}</h2>
      <h1>{JSON.stringify(starWarsData)}</h1>
      <button onClick={() => setCount(prev => prev + 1)}>Generate Next Character</button>
    </div>
  );
}

export default App;
