import React from "react";
import { Header, Sidebar } from "./Component";
import { Routers } from "./Routers";
import "./App.css";
function App() {
  return (
    <div className='App'>
      <Header />
      <div className='App-container'>
        <Sidebar />
        <Routers />
      </div>
    </div>
  );
}

export default App;
