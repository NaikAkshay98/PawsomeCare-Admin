import React from 'react'
import "../css/App.css"

const Header = () => {
  return (
    <div>
      <header>
        <nav>
            <ul>
                <li><a href="/">Pawsome Care</a></li>
                <li><a href="/caretakers">View Caretakers</a></li>
                <li><a href="/events">Events</a></li>
                <li><a href="/support">Support</a></li>
                <li><a href="/appointments">View Appointments</a></li>
            </ul>
            <div class="user-state">Dog Owner A</div>
        </nav>
      </header>
      <main>
        <div class="hero-section">
        </div>
      </main>
      <footer>
        <p>About us</p>
        <p>"Pawsome Care" is an innovative web platform dedicated to enhancing the lives of dog owners and their cherished pets...</p>
      </footer>
    </div>
  )
}

export default Header
