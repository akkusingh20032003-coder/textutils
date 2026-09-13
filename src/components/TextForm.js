import React,{useState} from 'react'


export default function TextForm(props){
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
      const handleLoClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
    }
      const handleClearClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = '';
        setText(newText)
    }
     const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value)
    }
    const handleCopy = () => {
       var textElement = document.getElementById("mybox")
       textElement.select();
        textElement.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(textElement.value);
    }
    const handleExtraSpeace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const [text, setText] = useState('Enter text here');
    // setText("new text");
    const wordCount = text.split(/\s+/).filter((element) => element.length !==0).length;
    return(
        <>
        <div className="container"  style={{ color : props.mode === 'dark' ? 'white' : 'black'}}>
            <h1>{props.heading}</h1>
        
             <div className="mb-3">
             <textarea className="form-control" value={text} onChange={handleOnChange}   style={{ backgroundColor : props.mode === 'dark' ? 'gray' : 'white' , color: props.mode === 'dark' ? 'white' : 'black' }}  id="mybox" rows="8"></textarea>
            </div> 
             <button className="btn btn-primary me-2 mb-2" onClick={handleUpClick}>convert  to uppercase</button> 
              <button className="btn btn-primary me-2 mb-2" onClick={handleLoClick}>convert  to Lowercase</button> 
                <button className="btn btn-primary me-2 mb-2" onClick={handleClearClick}>text clear</button> 
                 <button className="btn btn-primary me-2 mb-2" onClick={handleCopy}>text copy</button> 
                  <button className="btn btn-primary me-2 mb-2" onClick={handleExtraSpeace}>Remove Extra Space</button> 
        </div>
        <div className="container my-3"  style={{ color : props.mode === 'dark' ? 'white' : 'black'}}>
            <h1>Your text summry</h1>
            <p>{text.split(/\s+/).filter((element)=> element.length !==0).length} word, {text.length}charcters</p>
            <p>{(0.008 * wordCount).toFixed(2)}Minutes read</p>
            <h2>Previwe</h2>
            <p>{text.length>0?text:"You Something to preview"}</p>
        </div>
        </>
)
}