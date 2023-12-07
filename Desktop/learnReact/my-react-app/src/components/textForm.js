import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("button clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case", "success");
    }
    // const[myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })

    // const [btnName, setBtnName] = useState("Enable Dark Mode")

    // const toggleStyle =() =>{
    //     if(myStyle.backgroundColor === 'white'){
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             //border: '2px solid whitecd'
    //         })
    //         setBtnName("Enable Light Mode")
    //     }
    //     else{
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setBtnName("Enable Dark Mode")
    //     }
    // }

    const handleLoClick = () => {
        // console.log("button clicked" + text);
        let newTxt = text.toLowerCase();
        setText(newTxt);
        props.showAlert("Converted to lower case", "success");

    }
    const handleClearClick = () => {
        // console.log("button clicked" + text);
        let newTxtt = '';
        setText(newTxtt);
        props.showAlert("text space is cleared", "success");

    }


    const handleOnChange = (event) => {
        console.log("handle on change is used");
        setText(event.target.value);
    }

    const [text, setText] = useState("");
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#d0d2f7' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="container">
                    <button className="btn btn-primary my-3 mx-3" onClick={handleUpClick}>Convert to Uppercase</button>
                    <button className="btn btn-primary my-3 mx-3" onClick={handleLoClick}>Convert to Lowercase</button>
                    <button className="btn btn-success my-3 mx-3" onClick={handleClearClick}>Clear Box</button>

                    {/* </div>
                <div className = "container my-3">
                <button className="btn btn-danger mx-3" onClick={toggleStyle}>{btnName}</button>
                </div> */}
                    {/*style={myStyle}*/}
                </div>
            </div>
            <div className="container my-4" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1> Your Text Summary</h1>
                <p>your test has {text.split(" ").length} words and has {text.length} letters</p>
                <h1>Preview</h1>
                <p style={{ color: text.length > 0 ? 'black' : 'grey' }}>
                    {text.length > 0 ? text : "Please enter some text to get a preview"}
                </p>
            </div>
            {/*<p>{text.length>0?text:"please enter some text to get preview"}</p>*/ }
        </>
        
    )
};