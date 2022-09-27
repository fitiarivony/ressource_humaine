import { useState } from 'react';
import './App.css';
import Former from './component/Form'

function App() {

    //statement
  const [compter,setCompter]=useState(1);

    //component
    const handle=()=>{
        setCompter(compter+1);
    }


    //jsx
  return (
    <div className="App">
      <p>{compter}</p>
      <button onClick={handle}>io</button>
      <Former></Former>
      <Former></Former>
      <Former></Former>
      <Former></Former>
     </div>
  );
}

export default App;
