import React, { useState } from 'react';
import './App.css';
import ColorWrapper from './ColorWrapper';
import TextColor from './TextColor';

const colors = ['red', 'blue', 'green', 'brown', 'violet']

function App() {
  const [textColor, setTextColor] = useState('red');

  const handleClick = (color) => {
    setTextColor(color)
  }
  return (
    <div className="App">
      <ColorWrapper colors={colors} handleClick={handleClick} textColor={textColor}/>
      <TextColor textColor={textColor}/>
    </div>
  );
}

export default App;
