import { useState } from 'react';
import './style.css';
import { ColorContainer } from './ColorContainer';
import Form from './Form';

function App() {
  const [color,setColor]=useState("");
  const contrastColor = ["red","green","black","gray","blue"];
  const checkContrastColor = ()=>{
    const arr= contrastColor.filter((Arraycolor) => Arraycolor.toLocaleLowerCase() === color.toLowerCase());
    return arr.length;
  }

  return (
    <div className="color_main_container">
      <ColorContainer
        color={color}
        checkContrastColor={checkContrastColor}
      />
      <Form
        color={color}
        setColor={setColor}
      />
      
    </div>
  );
}

export default App;
