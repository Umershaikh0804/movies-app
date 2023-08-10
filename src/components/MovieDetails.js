import React from "react";
import { useContext } from "react";
import { MyContext } from "../MyContext";

export default function MovieDetails() {
  const {text,setText} = useContext(MyContext);
  //console.log(text);
  return (
    <div>
      <h1 style={{color:"white"}}>Movie Details page</h1>
      <h1 style={{color:"white"}}>{text}</h1>
      <button onClick={()=>setText("Text changed from Movie Details Page")} style={{color:"black"}}>Change value</button>
    </div>
  );
}
