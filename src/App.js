import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./Navbar";
import MainContainer from "./MainContainer";
import Contact from "./ContactF";
function App() {
  return (
    
      <BrowserRouter><div>
        <Navbar />
        <MainContainer />
    
        </div>
      </BrowserRouter>
    
  );
}

export default App;
