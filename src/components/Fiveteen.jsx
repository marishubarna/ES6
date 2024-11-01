import React from "react";
import { useState } from "react";
const ListSort = () => {
  const [list, setList] = useState("");
  const [add, setAdd] = useState([]);
  const handelInputAdd = (e) => {
    setList(e.target.value);
  };

  // const sort = data.handelInputAdd();

  const handelChanges = () => {
    if (list.props() !== "") {
      setAdd([...add, list]);
      setList("");
    }
  };
  // const sortListAscending = () => {
  //   setAdd([...add].sort());
  // };

  return (
    <div>
      <input
        type="text"
        value={list}
        placeholder="Введіть новий текс"
        onChange={handelChanges}
      />
      <button onClick={handelInputAdd}>Додати</button>

      <ul>
        {add.map((list, index) => (
          <li key={index}>{list}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListSort;

// import React, { useState } from "react";

// const ListSort = () => {
//   const [list, setList] = useState("");
//   const [add, setAdd] = useState([]);

//   const handelInputAdd = (e) => {
//     setList(e.target.value);
//   };

//   const handelChanges = () => {
//     if (list !== "") {
//       setAdd([...add, list]); // Додаємо новий елемент до масиву `add`
//       setList(""); // Очищаємо поле введення
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={list}
//         placeholder="Введіть новий текст"
//         onChange={handelInputAdd} // Замінили на правильний обробник
//       />
//       <button onClick={handelChanges}>Додати</button>{" "}
//       {/* Викликаємо `handelChanges` */}
//       <ul>
//         {add.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ListSort;

// import React, { useState } from "react";

// const ListSort = () => {
//   const [list, setList] = useState("");
//   const [add, setAdd] = useState([]);

//   const handelInputAdd = (e) => {
//     setList(e.target.value);
//   };

//   const handelChanges = () => {
//     if (list !== "") {
//       setAdd([...add, list]); // Додаємо новий елемент до масиву `add`
//       setList(""); // Очищаємо поле введення
//     }
//   };

//   // Функція для сортування списку в алфавітному порядку
//   const sortListAscending = () => {
//     setAdd([...add].sort());
//   };

//   // Функція для сортування списку у зворотному порядку
//   const sortListDescending = () => {
//     setAdd([...add].sort().reverse());
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={list}
//         placeholder="Введіть новий текст"
//         onChange={handelInputAdd}
//       />
//       <button onClick={handelChanges}>Додати</button>
//       <button onClick={sortListAscending}>Сортувати (А-Я)</button>
//       <button onClick={sortListDescending}>Сортувати (Я-А)</button>

//       <ul>
//         {add.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ListSort;
