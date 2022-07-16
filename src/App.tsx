import React, {useState} from 'react';
import './App.css';
import Labirint from "./components/Labirint/Labirint";
import Button from "./components/Button/Button";
import Arrows from "./components/Arrows/Arrows";

function App() {
    return (
        <div className="App">
            <Labirint/>
            <Button></Button>
            <Arrows></Arrows>
        </div>
    );
}

export default App;
