import React, {useState} from 'react'

export default function TextForm(props) {

    function checkIsTextareaEmpty(){
        if(text==="")
        {
            props.showAlert("No Text Entered !","danger");
            return 1;
        }
        return 0;
    }
    const handleClearBox = ()=> {
        // console.log("handleClearBox button clicked!");
        let newText = "";
        setText(newText);
    }

    const handleCountCharacter = ()=> {
        // console.log("handleCountCharacter button clicked!");
        if(checkIsTextareaEmpty()===1)
            return 0;
        let len = text.length;
        let space = 0;
        for(let i=0;i<len;i++)
        {
            if(text[i]===' ')
                space = space+1;
        }
        let newText = text + "\n\n Number of Characters(without spaces) = " + (len-space) + "\n Number of Characters(with spaces) = " + len + "\n Number of words = " + (space+1);
        setText(newText);
    }

    const handleUpperCase = ()=>{
        // console.log("hanleUpperCase button clicked");
        if(checkIsTextareaEmpty()===1)
            return 0;   //exit handleUppecase if there is no text in textareabox
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Successfully Converted to Uppercase !","success");
    }

    const handleLowerCase = ()=> {
        // console.log("handleLowerCase button clicked!");
        if(checkIsTextareaEmpty()===1)
            return 0;
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Successfully Converted to Lowrecase !","success");
    }

    const handleSpecialCount = ()=> {
        if(checkIsTextareaEmpty()===1)
            return 0;
        let len = text.length;
        let vowel=0, Consonant=0,digits=0,special_characters=0;
        for(let i=0;i<len;i++)
        {
            let ch = text[i];
            if((ch>="a" && ch<="z") || (ch>="A" && ch<="Z"))
            {
                ch=ch.toLowerCase();
                if(ch==="a" || ch==="e" || ch==="i" || ch==="o" || ch==="u")
                {
                    vowel++;
                }
                else
                {
                    Consonant++;
                }
            }
            else if(ch>="0" && ch<="9")
            {
                digits++;
            }
            else
            {
                special_characters++;
            }
        }
        let newText = text + "\n\n No. of Vowel Characters = " + vowel + "\n" + 
        " No. of Consonant Characters = " + Consonant + "\n" +
        " No. of Digits = " + digits + "\n" +
        " No. of Special Characters = " + special_characters;
        setText(newText);
    }

    const handleCopyText = ()=> {
        if(checkIsTextareaEmpty()===1)
            return 0;
        var text = document.getElementById("myTextBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied to Clipboard !","success");
    }

    const handleSpeak = ()=> {
        if(checkIsTextareaEmpty()===1)
            return 0;
        var msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Speaking....","success");
    }

    const handleExtraSpaces = ()=> {
        if(checkIsTextareaEmpty()===1)
            return 0;
        let newText=text.replace(/\s+/g, ' ').trim()
        setText(newText);
        props.showAlert("Successfully Removed Extra Spaces !","success");
    }

    const handleReplaceEach = ()=> {
        if(text.search(replace_text)!==-1 && replace_text!=="")
        {
            let newText = text.replace(replace_text,replace_with_text);
            setText(newText);
            let alertmsg = "Replaced " + replace_text + " with " + replace_with_text + " at one palce !";
            props.showAlert(alertmsg,"success");
        }
        else
        {
            props.showAlert("Word not found to replace !","danger");
        }
    }

    const handleReplaceAll = ()=> {
        if(text.search(replace_text)!==-1 && replace_text!=="")
        {
            let newText = text.replace(new RegExp(replace_text,'g'),replace_with_text);  //Replace multiple instances
            setText(newText);
            let alertmsg = "Replaced all " + replace_text + " with " + replace_with_text + " !";
            props.showAlert(alertmsg,"success");
        }
        else
        {
            props.showAlert("Word not found to replace !","danger");
        }
    }

    const handleReplaceBoxClear = ()=> {
        setReplaceText("");
        setReplaceWithText("");
    }

    const [text,setText] = useState("");
    const [replace_text, setReplaceText] = useState("");
    const [replace_with_text,setReplaceWithText] = useState("");

    const handleOnChange = (event)=> {
        // console.log("On change");
        setText(event.target.value);
    }

    const handleReplaceBoxOnChange = (event)=> {
        setReplaceText(event.target.value);
    }

    const handleReplaceWithBoxOnChange = (event)=> {
        setReplaceWithText(event.target.value);
    }

    function countWords(text){
        let wc = text.split(" ").length;
        text.split(" ").forEach((word) => {
            if(!word.length){
                wc -= 1;  
            }
        });
        return wc;
    }

  return (
    <>
    <div className="container">
        <h2 className={`text-${(props.mode==='light'?'dark':'light')} font-weight-bold`}><b>{props.heading}</b></h2>
        <div className="mb-3">
            <textarea className={`form-control text-${(props.mode==='light'?'dark':'light')}`} value={text} onChange={handleOnChange} id="myTextBox" rows="10" placeholder="Enter your text here!"></textarea>
        </div>
        <div className="container my-1">
            <button className={`btn btn-${(props.mode==='light'?props.theme:'secondary')} m-1`} onClick={handleClearBox}>Clear Box</button>
            <button className={`btn btn-${(props.mode==='light'?props.theme:'secondary')} m-1`} onClick={handleCountCharacter}>Count Characters/Words</button>
            <button className={`btn btn-${(props.mode==='light'?props.theme:'secondary')} m-1`} onClick={handleUpperCase}>Convert to Uppercase</button>
            <button className={`btn btn-${(props.mode==='light'?props.theme:'secondary')} m-1`} onClick={handleLowerCase}>Convert to Lowercase</button>
            <button className={`btn btn-${(props.mode==='light'?props.theme:'secondary')} m-1`} onClick={handleSpecialCount}>Count Vowel/Consonant/Digits/SpecialCharacter</button>
            <button className={`btn btn-${(props.mode==='light'?props.theme:'secondary')} m-1`} onClick={handleCopyText}>Copy Text</button>
            <button className={`btn btn-${(props.mode==='light'?props.theme:'secondary')} m-1`} onClick={handleSpeak}>Speak</button>
            <button className={`btn btn-${(props.mode==='light'?props.theme:'secondary')} m-1`} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-2">
            <b className={`text-${(props.mode==='light'?'dark':'light')}`}>Replace </b> <input type="text" value={replace_text} onChange={handleReplaceBoxOnChange}/> 
            <b className={`text-${(props.mode==='light'?'dark':'light')}`}> With </b> <input type="text" value={replace_with_text} onChange={handleReplaceWithBoxOnChange}/>
            <button className={`btn btn-${(props.mode==='light'?props.theme:'secondary')} m-1`} onClick={handleReplaceEach}>Replace Each</button>
            <button className={`btn btn-${(props.mode==='light'?props.theme:'secondary')} m-1`} onClick={handleReplaceAll}>Replace All</button>
            <button className={`btn btn-${(props.mode==='light'?props.theme:'secondary')} m-1`} onClick={handleReplaceBoxClear}>Clear</button>
        </div>
    </div>
    <div className={`container my-3 text-${(props.mode==='light'?'dark':'light')}`}>
        <h5>{countWords(text)} words and {text.length} characters</h5>
    </div>
    </>
  )
}
