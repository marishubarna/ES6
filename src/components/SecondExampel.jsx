import React from "react";
const SecondExampel = ({ Autoryzation }) => {
  //   if (Autoryzation === true) {
  //     return <h1>Welcome Back</h1>;
  //   } else {
  //     return <h1>Please sign in</h1>;
  //   }
  //   return <h1>{Autoryzation === true ? "Wellcome Back" : "Please Sigh in "}</h1>;
  const Render = Autoryzation === true;
  return Render && "Wellcome Bacj";
};

export default SecondExampel;
