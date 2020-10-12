import React from "react";
import termArchive from "./term-archive";

function TermDisplay(props) {
  const { term, definition} = props;
  return (
    <div>
      <main>
        <h1 className="term-display">{term}</h1>
        <p className="definition-display">{definition}</p>
        <img src={imageSource} alt="Example" width="500" />
      </main>
    </div>
  );
}
export default TermDisplay;
