import { useEffect } from "react";
import "./App.css";
import { useInfo } from "./context/info-context";
import Onboarding from "./pages/Onboarding";

function App() {
  const { name, setName } = useInfo();
  useEffect(() => {
    setName(localStorage.getItem("userName"));
  }, []);
  console.log(name);
  return (
    <div className="App">
      {name ? `Hi ${name}, you are most welcome` : <Onboarding />}
    </div>
  );
}

export default App;
