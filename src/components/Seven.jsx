import React from "react";
const listOfName = ["Mychailo", "Anna", "Maria", "Stepan", "Yura"];
const Seven = () => {
  return (
    <div>
      {listOfName
        .filter((list) => list.includes("a"))
        .map((filterList) => (
          <li>{filterList}</li>
        ))}
    </div>
  );
};

export default Seven;
