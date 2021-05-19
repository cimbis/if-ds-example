import React from 'react';
import logo from './logo.svg';
import './App.scss';
import {MyButton} from "./Button";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                Learn React
                <MyButton text={'lol'}/>
            </header>
        </div>
    );
}

export default App;
