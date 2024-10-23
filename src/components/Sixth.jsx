import React from "react";
const List = ["Html", "Css", "JavaScript", "React", "Bootstrap"];
const Sixth = () => {
  return (
    <div>
      <ul>
        {List.map((Items) => (
          <li>{Items}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sixth;
