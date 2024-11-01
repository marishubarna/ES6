import React, { useState } from "react";

const Fourteen = () => {
  const [firstName, setFirstName] = useState("");
  let renderToConnect;

  if (firstName) {
    renderToConnect = <h1>Дані записані</h1>;
  } else {
    renderToConnect = <button onClick={buttonRegister}>Реєстрація</button>;
  }

  function buttonRegister() {
    alert("Помилка: немає ім'я для входу");
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Ім'я"
        onChange={(e) => setFirstName(e.target.value)}
      />
      {renderToConnect}
    </div>
  );
};

export default Fourteen;
