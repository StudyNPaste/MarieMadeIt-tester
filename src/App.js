import './App.css';
import logo from './Components/Assets/logo.PNG'

function App() {
  return (
    <div className="App">
      <div className='navbar'>
        <h1>MarieMadeIt</h1>
        <img src={logo} alt="" width={120} height={120} />
      </div>
      <div className='title'>
        <h1>Tester Application</h1>
        <h3>Crochet Bloomers</h3>
      </div>
      <div>
        <form className='info' action="">
          <div className='info-input'>
            <label htmlFor="">Instagram:</label>
            <input type="text" placeholder='Instagram Name...' className='input' id='insta-name' autoComplete='off'/>
          </div>
          <div className='info-input'>
            <label htmlFor="">Email:</label>
            <input type="text" placeholder='Email Address...' className='input' id='email' autoComplete='off'/>
          </div>
          <div className='info-input'>
            <label htmlFor="">Your Instagram URL:</label>
            <input type="text" placeholder='Instagram URL...' className='input' id='insta-url' autoComplete='off'/>
          </div>
          <div>
            <label htmlFor="">Color:</label>
            <input type="text" placeholder='What color do you plan on using?...' className='input' id='item-color' autoComplete='off'/>
          </div>
          <button>SUBMIT</button>
        </form>
      </div>
    </div>
  );
}

export default App;
