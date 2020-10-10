import React from "react";
// import { BrowserRouter, Switch } from "react-router-dom";
import TermPage from "../pages/term-page-template";
import TermDisplay from "./term-page";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

// The app is responsible for routing and loading the appropriate page within the application
function App() {
  return <TermDisplay />;
}
export default App;
