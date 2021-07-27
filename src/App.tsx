import React, { useEffect, useState } from 'react';
import './App.css';
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import MyComponent from './components/MyComponent';

function App() {
  const [var1, setVar1] = useState(0)

  useEffect(()=> {
    setTimeout(() => {
      console.log("setTimeout ... ")
      setVar1(99)
    }, 2000);
  }, [])

  console.log("--------------------------------\nRendering main")

  return (
    <div className="App">
      <Component1 var1={var1}/>
      <Component2/>
      <MyComponent id="component3" text="Component4"/>
      <button onClick={() => {
        setVar1(var1+1)
      }}>Inc</button>
    </div>
  );
}

export default App;
