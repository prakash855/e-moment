import { useEffect } from "react";
import "./App.css";
import { useInfo } from "./context/info-context";
import Hero from "./pages/Hero";
import Onboarding from "./pages/Onboarding";

function App() {
  const { name, setName } = useInfo();

  useEffect(() => {
    setName(localStorage.getItem("userName"));
  });

  return <div className="App">{name ? <Hero /> : <Onboarding />}</div>;
}

export default App;
