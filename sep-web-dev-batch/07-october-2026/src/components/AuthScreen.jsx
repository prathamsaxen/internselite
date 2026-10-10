import { useState } from "react";
import { login, signup } from "../api";

const CALLS = [
  ["POST", "/api/signup"],
  ["POST", "/api/login"],
  ["GET", "/api/students"],
  ["POST", "/api/students"],
  ["PUT", "/api/students/:id"],
  ["DELETE", "/api/students/:id"],
];

const EMPTY = { name: "", email: "", password: "" };

function AuthScreen({ onLogin }) {
  const [mode, setMode] = useState("login");
  const [form, setForm] = useState(EMPTY);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [busy, setBusy] = useState(false);

  function update(field, value) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function switchMode(next) {
    setMode(next);
    setError("");
    setNotice("");
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setNotice("");
    setBusy(true);
    try {
      if (mode === "signup") {
        const data = await signup({
          name: form.name.trim(),
          email: form.email.trim(),
          password: form.password,
        });
        setNotice(data.message || "Account created. Log in to continue.");
        setMode("login");
        setForm((current) => ({ ...current, password: "" }));
      } else {
        const data = await login({
          email: form.email.trim(),
          password: form.password,
        });
        onLogin(data.token);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  }

  const isSignup = mode === "signup";

  return (
    <div className="auth-shell">
      <section className="auth-story">
        <div>
          <p className="eyebrow">October 4 server · port 3000</p>
          <h1>Student registry</h1>
          <p className="lede">
            Sign in, then add, update, and remove students through the routes
            already on your API.
          </p>
        </div>
        <ul className="endpoint-list">
          {CALLS.map(([method, path]) => (
            <li key={`${method} ${path}`}>
              <span className={`method method-${method.toLowerCase()}`}>
                {method}
              </span>
              <code>{path}</code>
            </li>
          ))}
        </ul>
      </section>

      <section className="auth-panel">
        <div className="auth-card">
          <div className="mode-switch" role="tablist" aria-label="Account">
            <button
              type="button"
              role="tab"
              aria-selected={mode === "login"}
              className={mode === "login" ? "active" : ""}
              onClick={() => switchMode("login")}
            >
              Log in
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={isSignup}
              className={isSignup ? "active" : ""}
              onClick={() => switchMode("signup")}
            >
              Create account
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            {isSignup ? (
              <label>
                Name
                <input
                  name="name"
                  autoComplete="name"
                  value={form.name}
                  onChange={(event) => update("name", event.target.value)}
                  placeholder="Pratham"
                />
              </label>
            ) : null}

            <label>
              Email
              <input
                name="email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={(event) => update("email", event.target.value)}
                placeholder="you@example.com"
              />
            </label>

            <label>
              Password
              <input
                name="password"
                type="password"
                autoComplete={isSignup ? "new-password" : "current-password"}
                value={form.password}
                onChange={(event) => update("password", event.target.value)}
                placeholder="Your password"
              />
            </label>

            {error ? (
              <p className="banner bad" role="alert">
                {error}
              </p>
            ) : null}
            {notice ? (
              <p className="banner good" role="status">
                {notice}
              </p>
            ) : null}

            <button className="primary" type="submit" disabled={busy}>
              {busy ? "Please wait…" : isSignup ? "Create account" : "Log in"}
            </button>
          </form>
          <p className="fine-print">
            The login token lasts one hour, the same window the API signs.
          </p>
        </div>
      </section>
    </div>
  );
}

export default AuthScreen;
