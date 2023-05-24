import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <div className="Autorise">	
        <div className="PersonalInfo">
          <div className="FormAutorise">
            <button id='LogIn'>Log In</button>
            <button id='SignIn'>Sign In</button>
          </div>
          <div className="Field">
            <p>Email</p>
            <input type="text" id='email'/>
          </div>
          <div className="Field">
            <p>Password</p>
            <input type="text" id='password'/>
          </div>
          <button id='Btn'>Log In</button>
        </div>
      </div>
    </>
  )
}

export default App
