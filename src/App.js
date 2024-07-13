import './App.css';
import logo from './Components/Assets/logo.PNG'

function App() {
  return (
    <div className="App">
      <div className='navbar'>
        <h1>MarieMadeIt</h1>
        <img src={logo} alt="" width={120} height={120} />
      </div>
    </div>
  );
}

export default App;
