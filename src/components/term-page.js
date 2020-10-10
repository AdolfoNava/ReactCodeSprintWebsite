import React from "react";
import termArchive from "./term-archive";

function TermDisplay() {
  const { term, definition, imageSource } = termArchive[0];
  return (
    <div>
      <main>
        <h1 className="term-display">{term}</h1>
        <p className="definition-display">{definition}</p>
        <img src={imageSource} width="500" />
      </main>
    </div>
  );
}
export default TermDisplay;
