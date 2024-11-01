import { Children, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import Ten from "../src/components/Tenth";
//import FirstEx from "./components/FirstExampel";
//import SecondExampel from "./components/SecondExampel";
// import Six from "./components/Sixth";
// import Seven from "./components/Seven";
// import Eight from "./components/Eight";
// import Nine from "./components/Nine";
// import Eleven from "./components/Eleven";
// import ThirdTeen from "./components/Thirteen";
// import Password from "./components/password";
// import Fourteen from "./components/Fourteen";
import Fiveteen from "./components/Fiveteen";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Password /> */}
      {/* <Fourteen /> */}
      <Fiveteen />
    </>
  );
}

export default App;
