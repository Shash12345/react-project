import "./App.css";
//import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
//import {
  //BrowserRouter as Router,
  //Switch,
  //Route,
  //Routes,
  
//} from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState("NULL");
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() =>{
      setAlert(null);
    }, 3000);
  };
  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.background = "#063270";
      showAlert("Dark mode is enabled", "success");
      document.title = "TextUtils-Dark Mode";
      /* setInterval(() => {
      document.title="TextUtils is amazing  Mode";
    },2000);
    setInterval(() => {
      document.title="Install TextUtils Now";
    },1500);*/
    } else {
      setmode("light");
      document.body.style.background = "white";
      showAlert("light mode is enabled", "success");
      document.title = "TextUtils-light Mode";
    }
  };
  return (
    <>
      {/*<Navbar title="TextUtils" aboutText="About TextUtils"/>*/}
      {/* <Navbar/>*/}
     {/* <Router>*/}
        <Navbar title="TextUtils" mode={mode} toggleMode={togglemode} />
        <Alert alert={alert} />
        <div className="container my-3">
        {/* <Routes>*/}
            {/*<Route  exact path="/about" element={<About />}></Route>*/}
           
            
        
        
          <TextForm  heading="Enter your text to analyze below" mode={mode} showAlert={showAlert}/>
         {/*<TextForm  heading="Enter your text to analyze below" mode={mode} showAlert={showAlert} />*/}
            
         {/* </Route>*/}
          
          {/*</Routes>*/}
          </div>
            {/*</Router>*/}
     
             
          {/*<TextForm showAlert={showAlert} heading="Enter your text to analyze below" mode={mode}*/}
         {/* <About/>*/}
        
    </>
  );
}
export default App;
