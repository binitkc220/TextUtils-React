import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light');
  const [theme,setTheme] = useState('primary');
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = ()=> {
    if(mode==='light')
      {
        setTheme(null);
        setMode('dark');
        showAlert("Dark Mode successfully enabled !","success");
        document.body.style.backgroundColor = '#121212';
        document.getElementById("myTextBox").style.setProperty("background-color","#52575c","important");
      }
    else
    {
      setTheme('primary');
      setMode('light');
      showAlert("Blue Theme Applied !","success");
      document.body.style.backgroundColor = '#24abfc';
      document.getElementById("myTextBox").style.setProperty("background-color","#b8e4ff","important");
    }
  }

  const toggleTheme = (theme_data)=> {
    setTheme(theme_data);
    if(theme_data==='primary' && mode==='light')
    {
      document.body.style.backgroundColor = '#24abfc';
      showAlert("Blue Theme Applied !","success");
      document.getElementById("myTextBox").style.setProperty("background-color","#b8e4ff","important");
    }
    if(theme_data==='success' && mode==='light')
    {
      document.body.style.backgroundColor = '#3f6e3f';
      showAlert("Green Theme Applied !","success");
      document.getElementById("myTextBox").style.setProperty("background-color","#78a272","important");
    }
    if(theme_data==='danger' && mode==='light')
    {
      document.body.style.backgroundColor = '#990e0e';
      showAlert("Red Theme Applied !","success");
      document.getElementById("myTextBox").style.setProperty("background-color","#db8484","important");
    }
    if(theme_data==='warning' && mode==='light')
    {
      document.body.style.backgroundColor = '#a37e0d';
      showAlert("Yellow Theme Applied !","success");
      document.getElementById("myTextBox").style.setProperty("background-color","#dbc984","important");
    }
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode} theme={theme} toggleMode={toggleMode} toggleTheme={toggleTheme}/>
      <div className="container my-3">      
      <Routes>
        <Route exact path="/" element={<TextForm heading="Enter your text to analyze" mode={mode} theme={theme} showAlert={showAlert}/>}>
        </Route>
        <Route exact path="/about" element={<About mode={mode}/>}>
        </Route>
      </Routes>
      </div>
      <Alert alert={alert}/>
    </Router>
    </>
  );
}

export default App;
