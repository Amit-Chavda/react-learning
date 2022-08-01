import '../styles/App.css';
import { useState, useEffect } from "react";
import axios from "axios"

function App() {

  const [starWarsData, setStarWarsData] = useState({});
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios.get("https://swapi.dev/api/people/1")
      .then((res) => {
        setStarWarsData(res.data)
        console.log(starWarsData)
      })
  }, [count]);

  return (
    <div className="App">
      <h2>Counter:{count}</h2>
      <button onClick={()=>setCount(prev=>prev+1)}>Add</button>
    </div>
  );
}

export default App;
