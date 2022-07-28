import logo from './logo.svg';
import './App.css';
import MyNavbar from './component/navbar';
import MyComponent from './component/MyConponent';

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <MyComponent title="Box" />
    </div>
  );
}

export default App;
