import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Heading from './Components/heading'
import Navbar from './Components/navbar'
import UserCard from './Components/UserCard'

function App() {
  const [count, setCount] = useState(0)
  const user ={
    name: "Pratham",
    age: 20,
    email: "pratham@gmail.com",
    city: "Delhi",
    country: "India",
    phone: "1234567890",
    address: "123 Main St, Anytown, USA",
    zip: "12345",
    state: "Delhi",
  }
  const user2 = {
    name: "John",
    age: 21,
    email: "john@gmail.com",
    city: "Mumbai",
    country: "India",
    phone: "1234567890",
    address: "123 Main St, Anytown, USA",
    zip: "12345",
    state: "Maharashtra",
  }
  const user3 = {
    name: "Jane",
    age: 22,
    email: "jane@gmail.com",
    city: "Chennai",
    country: "India",
    phone: "1234567890",
    address: "123 Main St, Anytown, USA",
    zip: "12345",
    state: "Tamil Nadu",
  }
  return (
    <>
    {/* <Heading />
    <Navbar /> */}
    <UserCard name={user.name} age={user.age} email={user.email} city={user.city} country={user.country} phone={user.phone} address={user.address} zip={user.zip} state={user.state} />
    <UserCard name={user2.name} age={user2.age} email={user2.email} city={user2.city} country={user2.country} phone={user2.phone} address={user2.address} zip={user2.zip} state={user2.state} />
    <UserCard name={user3.name} age={user3.age} email={user3.email} city={user3.city} country={user3.country} phone={user3.phone} address={user3.address} zip={user3.zip} state={user3.state} />
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
