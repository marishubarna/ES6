import React from "react";
const ShopList = [
  { title: "Apple", price: "2$" },
  { title: "Peach", price: "2$" },
  { title: "Watermelon", price: "3$" },
  { title: "Corn", price: "4$" },
];

const Eleven = () => {
  return <ul>{ShopList.map(item => <ListIteam title = {item.title} price = {item.price}/>)}</ul>;
};
 
 const ListIteam = (props) => {
  return(
    <li>{props.title} має ціну {props.price}</li>
  )
 }

export default Eleven;
