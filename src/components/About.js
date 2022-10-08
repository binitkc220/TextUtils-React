import React from 'react'

export default function About(props) {
  return (
    <div className="container">
    <h2 className={`text-${(props.mode==='light'?'dark':'light')} font-weight-bold`}><b>About</b></h2>
    <h4 className={`text-${(props.mode==='light'?'dark':'light')} text-justify m-4`}>
      <b>Textutils</b> is a web based app developed and designed using React JS and Bootstrap by <a class={`link-${(props.mode==='light'?'dark':'light')}`} href="https://binitkc.com.np" target="_blank" rel="noopener noreferrer"><b>Binit KC</b></a>. It simply consists of a textbox where we can type text. Then, we can manipulate those text like removing extra space, converting it to lowercase and uppercase, count vowel characters, consonant characters, digits and special characters in the text, and so on.. It also has features of four different colour themes and consist of dark mode too. Other feature includes copying text and text-to-speech.
    </h4>
    <br/>
    <h3 className={`text-${(props.mode==='light'?'dark':'light')} text-justify m-4`}><b>Source Code:</b></h3>
    <a class={`link-${(props.mode==='light'?'dark':'light')}`} href="https://github.com/binitkc220/TextUtils-React" target="_blank" rel="noopener noreferrer"><h4 className={`text-${(props.mode==='light'?'dark':'light')} text-justify m-4`}>TextUtils-React</h4></a>
    </div>
  )
}
