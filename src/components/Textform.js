import React, { useState } from 'react';
export default function Textform(props) {

    const handleonClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handlednClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClear = () => {
        setText("");
    }

    const handleupChange = (e) => {
        setText(e.target.value);
    }

    const handleCopy = () =>{
        var copyText = document.getElementById('myText');
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
    }

    const [text, setText] = useState('')

    return (
        <>
            <div className="container">
                <h2 className={`mt-4 text-dark`}>Enter text below</h2>
                <textarea className="form-control my-3" value={text} id="myText" rows="10" placeholder="Enter text here..." onChange={handleupChange}/>
                <button className={`btn btn-dark`} onClick={handleonClick}>UPPERCASE</button>
                <button className={`btn btn-dark mx-3`} onClick={handlednClick}>lowercase</button>
                <button className={`btn btn-dark`} onClick={handleCopy}>Copy text</button>
                <button className={`btn btn-dark mx-3`} onClick={handleClear}>Reset</button>
                <h3 className={`mt-4 text-dark`}>Preview</h3>
                <p>{text}</p>
                <h6 className="mt-3">{text.split(" ").length} words and {text.length} characters</h6>
            </div>
        </>
    )

}
