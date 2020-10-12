import React from "react";
import "./term-layout.css";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom"

function TermLayout(props){

const {currentTerm, currentDefinition} = props;

// const onButtonClick = (event)=>{
//     <Link to={`/terms/${currentTerm}`}/>
// }
return(
<div>
    <BrowserRouter>
<Switch>
<li><Link to={`/term/${currentTerm}`}><button className="term-layout__button">{currentTerm}</button></Link></li>
    <Route path={`/term/${currentTerm}`}/>
</Switch>
</BrowserRouter>
<li className="definition-layout">{currentDefinition}</li>
</div>
);
}
export default TermLayout;
// onClick = {onButtonClick}