import React from 'react';
import './App.css';
import BuggyCounter from './BuggyCounter';
import ErrorBoundary from './ErrorBoundary';
import Color from './Color';




function App() {
  return (
    <div className="App">
      <h1>Simulation 1:</h1>
      <ErrorBoundary>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>

      <h1>Simulation 2:</h1>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>

      <h1>Simulation 3:</h1>
      <BuggyCounter />


      <Color />
    </div>

  );
}

export default App;
