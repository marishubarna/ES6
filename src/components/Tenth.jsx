import React from "react";
import { useState } from "react";

function Voite() {
  const [voites, setVoites] = useState(0);

  const handelUpVoite = () => {
    setVoites(voites + 1);
  };

  const handelDownVoite = () => {
    setVoites(voites - 1);
  };

  return (
    <div>
      <h2>Рахунок {voites}</h2>
      <button onClick={handelUpVoite}>Voite</button>
      <button onClick={handelDownVoite}>Cancel Your Decition</button>
    </div>
  );
}

export default Voite;
