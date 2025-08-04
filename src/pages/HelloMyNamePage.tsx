import React, { useState } from "react";

export default function HelloMyNamePage() {

  const [name, setName] = useState("");
  const [result, setResult] = useState("");
  const [isOk, setIsOk] = useState(false);

  const greetBtnOnClick = () => {
  if (name === ""){
      setResult("Please enter your name.");
      setIsOk(false);
    } 
  else {
      setResult(`Hello, ${name}!`);
      setIsOk(true);
    }
  }

  const nameInputOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }
  
  return (
    <div className="container text-center">
      <h3>Hello My Name</h3>
      <input
        className="form-control d-inline m-1"
        placeholder="Insert your name here!"
        style={{ width: "300px" }}
        value ={name}
        onChange={nameInputOnChange}
      />
      <button className="btn btn-primary"
      onClick={greetBtnOnClick}
      >Greet Me</button>
      
      <p className={isOk ?"":"text-danger"}>{result}</p>
    </div>
  );
}
//