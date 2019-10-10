import React from "react";
import "./App.css";

//Import Components
import Bodya from './components/Bodya';
// import Image from './components/Image';
import Datepicker from './components/Datepicker';

// import styled from 'styled-components';


function App() {
  return (
    <div className="App">

    <Bodya/>
   <Datepicker/>
    
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p> */}

    </div>
  );
}

export default App;
