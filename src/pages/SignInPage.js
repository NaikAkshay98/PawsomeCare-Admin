import React from 'react'
import SignIn from '../components/SignIn'
import Headers from '../components/Headers'
import Footer from '../components/Footer'
const SignInPage = () => {
  return (
    <div>
      <header>
        <Headers/>
      </header>
      <SignIn/>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default SignInPage
