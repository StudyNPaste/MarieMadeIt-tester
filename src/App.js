import './App.css';
import logo from './Components/Assets/logo.PNG'

function App() {

  const form = document.querySelector('form');

  function sendEmail() {
    Email.send({
      Host : "smtp.elasticemail.com",
      Username : "mariemadeit16@gmail.com",
      Password : "8FB6AEDB17FA114F51BCADC9054826F442C0",
      To : 'them@website.com',
      From : "you@isp.com",
      Subject : "This is the subject",
      Body : "And this is the body"
    }).then(
      message => alert(message)
    );
  }

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
          <div className='error-txt'>Instagram name can't be blank.</div>
          <div className='info-input'>
            <label htmlFor="">Your Instagram URL:</label>
            <input type="text" placeholder='Instagram URL...' className='input' id='insta-url' autoComplete='off'/>
          </div>
          <div className='error-txt'>Instagram URL can't be blank.</div>
          <div className='info-input'>
            <label htmlFor="">Email:</label>
            <input type="text" placeholder='Email Address...' className='input' id='email' autoComplete='off'/>
          </div>
          <div className='error-txt'>Email Address can't be blank.</div>
          <div className='info-input'>
            <label htmlFor="">Color:</label>
            <input type="text" placeholder='What color do you plan on using?...' className='input' id='item-color' autoComplete='off'/>
          </div>
          <div className='error-txt'>Please enter a color.</div>
          <button>SUBMIT</button>
        </form>
      </div>
    </div>
  );
}

export default App;
