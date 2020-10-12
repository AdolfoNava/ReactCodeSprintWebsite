import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import TermCharacterSorted from "../pages/term-sorted-page";
import "../components/main.css";



// The app is responsible for routing and loading the appropriate page within the application
function App() {
 
  return (
<BrowserRouter>
<Header/>
 <TermCharacterSorted/> 
 <Footer/>
</BrowserRouter>

 );
}
export default App;
