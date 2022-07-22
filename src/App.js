import React from "react";
import { Header, Sidebar } from "./Component";
import { Routers } from "./Routers";
import { Route, Routes } from "react-router-dom";
import { LangingPage, SignUp, Login } from "./Pages";
import "./App.css";
function App() {
  return (
    <div className='App'>
      <Header />
      <div>
        <Routers />
      </div>
    </div>
  );
}

export default App;
