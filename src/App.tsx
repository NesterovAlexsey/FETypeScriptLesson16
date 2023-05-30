import React from 'react';
import logo from './logo.svg';
import './App.css';

//Задание 1
// Создайте тип для следующего объекта {title: "Berlin", population: 3_400_000, isCapital: true}
// После создайте константу с указанием этого типа

interface City {
  title: string,
  population: number,
  isCapital: boolean,
}

function newCityBerlin(): City {
  return {
    title: "Berlin",
    population: 3_400_000,
    isCapital: true,
  }
}

console.log(newCityBerlin());

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
