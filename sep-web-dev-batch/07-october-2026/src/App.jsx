import { useCallback, useState } from "react";
import { clearSession, loadSession, saveSession } from "./api";
import AuthScreen from "./components/AuthScreen";
import StudentsScreen from "./components/StudentsScreen";

function App() {
  const [session, setSession] = useState(loadSession);

  function handleLogin(token) {
    setSession(saveSession(token));
  }

  const handleLogout = useCallback(() => {
    clearSession();
    setSession(null);
  }, []);

  if (!session) {
    return <AuthScreen onLogin={handleLogin} />;
  }

  return <StudentsScreen session={session} onLogout={handleLogout} />;
}

export default App;
