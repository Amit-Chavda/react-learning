import '../styles/App.css';
import { useState, useEffect } from "react";
import WindowTracker from "./WindowTracker"

function App() {

  const [isShowWidth, setIsShowWidth] = useState(true);

  return (
    <div className="App">
      <button onClick={() => setIsShowWidth(prev => !prev)}>Toggle Window Tracker</button>
      {isShowWidth && <WindowTracker />}
    </div>
  );
}

export default App;
