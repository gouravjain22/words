//import React from 'react'
import React, { useState } from 'react'



export default function Textform(props) {

  const [text, setText] = useState('Welcome Gourav Application');
  const handleUpClick =() =>{
    console.log("upper click");
    let newText = text.toUpperCase();
    setText(newText);

  }
  const handlelowClick =() =>{
    console.log("upper click");
    let newText = text.toLowerCase();
    setText(newText);

  }
  const handleOnChange =(event)=>{
    console.log("upper click");
    setText(event.target.value);
  }
  const removeSpace =() =>{
    console.log("remove space");
    let newText = text.replace(/\s+/g,' ')
    setText(newText);
}
const FirstLetterCapital =() =>{
  console.log("remove space");
  let newText = text[0].toUpperCase() + text.substring(1)
  setText(newText);
}
  let w =text.split(" ").length;
  let s = w*2.5;
  let min = s/60;
  return (
    <>
    <div className='container'>

        <div className="mb-3">
         
         <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
         </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>convert to uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handlelowClick}>convert to lowercase</button>
        <button type="button" className="btn btn-primary mx-2" onClick={removeSpace}>remove space</button>
        <button type="button" className="btn btn-primary mx-2" onClick={FirstLetterCapital}>FirstLetterCapital</button>
               
    </div>
    <div className='container my-3' >
        <h1>Your summary</h1>
        <p> {text.split(" ").length} words  and  {text.length} characters </p>
        <p> You can read {text.split(" ").length} words in {min} Minutes {s} Seconds </p>
    </div>
    </>
  )
}
