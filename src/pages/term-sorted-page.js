// This will be the page where all the terms that are associated with
// the first character in the term name be structured
import React from "react";

import TermLayout from "../components/term-layout";
import termArchive from "../components/term-archive";
import { BrowserRouter,Route } from "react-router-dom";


function TermCharacterSorted() {

  return(
  <div> 
     <BrowserRouter>
<ul>

<TermLayout
  currentTerm = {termArchive[0].term}
  currentDefinition ={termArchive[0].definition}
/>
<TermLayout
  currentTerm = {termArchive[1].term}
  currentDefinition ={termArchive[1].definition}/>
<TermLayout
  currentTerm = {termArchive[2].term}
  currentDefinition ={termArchive[2].definition}
/>
<TermLayout
  currentTerm = {termArchive[3].term}
  currentDefinition ={termArchive[3].definition}/>

  <TermLayout
  currentTerm = {termArchive[4].term}
  currentDefinition ={termArchive[4].definition}
/>
<TermLayout
  currentTerm = {termArchive[5].term}
  currentDefinition ={termArchive[5].definition}/>
  <TermLayout
  currentTerm = {termArchive[6].term}
  currentDefinition ={termArchive[6].definition}
/>
<TermLayout
  currentTerm = {termArchive[7].term}
  currentDefinition ={termArchive[7].definition}/>
  <TermLayout
  currentTerm = {termArchive[8].term}
  currentDefinition ={termArchive[8].definition}
/>
<TermLayout
  currentTerm = {termArchive[0].term}
  currentDefinition ={termArchive[0].definition}/>

</ul>

  </BrowserRouter>
  </div>
  );}
export default TermCharacterSorted;
