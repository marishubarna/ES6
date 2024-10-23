import React from "react";
const Date = ({ FirstName }) => {
  console.log(FirstName);
  return <span>{FirstName}</span>;
};
function FirstExampel() {
  return (
    <div>
      <h1>Hello word {<Date FirstName={name} />}</h1>
    </div>
  );
}

export default FirstExampel;
