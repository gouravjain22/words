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

  return (
    <>
    <div className='container'>

        <div className="mb-3">
         
         <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
         </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>convert to uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handlelowClick}>convert to lowercase</button>
    </div>
    <div className='container my-3' >
        <h1>Your summary</h1>
        <p> {text.split(" ").length} words  and  {text.length} characters </p>
    </div>
    </>
  )
}
