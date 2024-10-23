import React from "react";
import { useState } from "react";
const Counter = () => {
 const [numbers, setText] = useState(0)
  function CounterButton() {
     setText( Prev => Prev+1)
  }
  
  return (
    <div>
        <h1>Counting{numbers}</h1>
      <button onClick={CounterButton}>Counter</button>;
    </div>
  );
};

export default Counter;
