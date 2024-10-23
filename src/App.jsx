import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
//import FirstEx from "./components/FirstExampel";
//import SecondExampel from "./components/SecondExampel";
// import Six from "./components/Sixth";
// import Seven from "./components/Seven";
// import Eight from "./components/Eight";
import Nine from "./components/Nine";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nine />
    </>
  );
}

export default App;
