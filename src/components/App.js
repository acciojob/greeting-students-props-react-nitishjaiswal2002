import React from "react";
import '../styles/App.css';
import Welcome from './Welcome';

const App = () => {

  const studentName ='nitish';
  return (
    <Welcome name={studentName} />
  )
}


export default App;
