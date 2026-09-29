import React, {useState} from 'react'

function Auth() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <div>
        <h1>Authentication</h1>
        <p>{isLoggedIn ? "Welcome, User!" : "Please log in."}</p>
        {
            isLoggedIn ? (
                <div>
                    <h2>Dashboard</h2>
                    <p>This is the dashboard content.</p>
                </div>
            ) : (
                <div>
                    <h2>Login Form</h2>
                    <form>
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />
                        <button type="submit">Log In</button>
                    </form>
                </div>
            )
        }
        {/* Condidional Rendering / Ternary Operator */}
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
            {isLoggedIn ? "Log Out" : "Log In"}
        </button>
    </div>
  )
}

export default Auth;