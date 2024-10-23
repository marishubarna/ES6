import React from "react";
import { useState } from "react";

const Themse = () => {
  const [theme, setTheme] = useState(true);
  if (theme === true) {
  }

  return (
    <div>
      <button
        style={{
          backgroundColor: theme ? "yellow" : "black",
          color: theme ? "blue" : "white",
        }}
        onClick={() => setTheme((prevTheme) => !prevTheme)}
      >
        {theme ? "Daily" : "Dark"}
      </button>
    </div>
  );
};

export default Themse;
