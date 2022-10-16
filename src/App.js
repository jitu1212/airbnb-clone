import "./App.css";

import ReactNavBar from "./ReactNavBar";

import "bootstrap/dist/css/bootstrap.min.css";

import ReactImg from "./ReactImg";
import Main from "./Main";
import {  Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
    
   
    <div className="App">
    <ReactNavBar />
     <Routes>
     <Route path="/" element={  <ReactImg />}/>
      <Route path="/place" element={ <Main />}/>
     </Routes>
    </div>
   
    </>
  );
}

export default App;
