import React from "react";
import { useState } from "react";
const ButtomSwitchOnLineOffLine = () => {
  const [mode, setMode] = useState(true);
  if (mode === true) {
  }
  return (
    <div>
      <button
        type="submit"
        style={{
          backgroundColor: mode ? "pink" : "Blue",
          color: mode ? "Black" : "white",
        }}
        onClick={() => setMode((prevMode) => !prevMode)}
      >
        {mode ? "OnLine" : "OffLine"}
      </button>
    </div>
  );
};

export default ButtomSwitchOnLineOffLine;
