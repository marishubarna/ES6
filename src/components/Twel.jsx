import React from "react";
import { useState } from "react";

const forms = () => {
  const [age, setAge] = useState(0);
  let render;
  if (age >= 18) {
    render = <h1>Доступ дозволено</h1>;
  } else {
    render = <h1>Доступ заборонений</h1>;
  }

  return (
    <div>
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      {render}
    </div>
  );
};

export default forms;
