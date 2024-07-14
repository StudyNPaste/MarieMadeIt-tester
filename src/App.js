import './App.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import logo from './Components/Assets/logo.PNG'

function App() {
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    const serviceID = 'service_8y90p28';
    const templateID = 'template_4hi1yp5'

    emailjs.sendForm(serviceID, templateID, form.current, {
        publicKey: 'Y39E39t8rUfDdglmb',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset()
  };

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
        <form ref={form} onSubmit={sendEmail} className='info' action="">
          <div className='info-input'>
            <label htmlFor="">Instagram:</label>
            <input type="text" name='ig' placeholder='Instagram Name...' className='input' id='insta-name' autoComplete='off' required/>
          </div>
          <div className='error-txt'>Instagram name can't be blank.</div>
          <div className='info-input'>
            <label htmlFor="">Your Instagram URL:</label>
            <input type="text" name='url' placeholder='Instagram URL...' className='input' id='insta-url' autoComplete='off'required/>
          </div>
          <div className='error-txt'>Instagram URL can't be blank.</div>
          <div className='info-input'>
            <label htmlFor="">Email:</label>
            <input type="text" name='email' placeholder='Email Address...' className='input' id='email' autoComplete='off' required/>
          </div>
          <div className='error-txt'>Email Address can't be blank.</div>
          <div className='info-input'>
            <label htmlFor="">Color:</label>
            <input type="text" name='color' placeholder='What color do you plan on using?...' className='input' id='item-color' autoComplete='off' required/>
          </div>
          <div className='error-txt'>Please enter a color.</div>
          <input type='submit' className='submit-btn'></input>
        </form>
      </div>
    </div>
  );
}

export default App;
