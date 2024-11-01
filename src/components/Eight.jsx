import React from "react";
import { useState } from "react";
import "../index.css";
const LanguagesSelector = () => {
  const [languages, setLanguages] = useState("en");
  //   if (LanguagesSelector  === true){
  //     return <h1>English Version On</h1>
  //   } else {
  //     return <h1>Українська версія Увімкнена</h1>
  //   }
  const texts = {
    en: {
      greeting: "Hello, English Version On",
    },
    ua: {
      greeting: "Привіт,Українська Версія Увімкнена",
    },
  };

  const handleLanguageChange = (e) => {
    setLanguages(e.target.value);
  };

  return (
    <div>
      <select
        onChange={handleLanguageChange}
        value={languages}
        name="Languages"
        id=""
      >
        <option value="en">English</option>
        <option value="ua">Ukraine</option>
      </select>

      <div className="TextTitle">
        <h1>{texts[languages].greeting}</h1>
      </div>
    </div>
  );
};

export default LanguagesSelector;
