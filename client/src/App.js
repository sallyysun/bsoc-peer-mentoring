import React from "react";
import "./index.css";

import Header from "./components/header/Header";
import Upload from "./components/Upload";

const App = () => {
  return (
    <div className="container">
        <Header />
        <Upload />
    </div>
  );
}

export default App;