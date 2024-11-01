import React from "react";
import { useState } from "react";

const Dodawana = () => {
  const [lineForNumbers, setLine] = useState("");

  const [lineTwo, setLines] = useState([]);

  const handelInputChange = (e) => {
    setLine(e.target.value);
  };

  const handelAddLine = () => {
    if (lineForNumbers.trim() !== "") {
      setLines([...lineForNumbers, lineTwo]);
      setLine("");
    }
  };

  return (
    <div>
      <h1>Список</h1>

      <input
        type="text"
        value={lineForNumbers}
        placeholder="Введіть новий текс"
        onChange={handelInputChange}
      />
      <button onClick={handelAddLine}>Додати</button>

      <ul>
        {lineTwo.map((lineForNumbers, index) => (
          <li key={index}>{lineForNumbers}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dodawana;
