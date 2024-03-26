// import logo from './logo.svg';
import React, { useState, useEffect, useRef } from 'react'
import './App.css';

function App() {
  const copyText = () => {
    navigator.clipboard.writeText(text);
  }

  const handleOnChange = (event) => {
    setText(event.target.value)
  }

  const [text, setText] = useState('');
  const [length, setLength] = useState(8);
  const [useNum, setUseNum] = useState(true)
  const [useSpecialC, setUseSpecialC] = useState(true)
  const passwordRef = useRef(null);

  useEffect(() => { generatePass(); }, [length, useNum, useSpecialC])

  const generatePass = () => {
    const upperC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerC = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialC = '!@#$%^&*()_+{}|:<>?-=[]\\;\',./';

    let Password = upperC + lowerC;
    if (useNum) Password += numbers;
    if (useSpecialC) Password += specialC;

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      generatedPassword += Password.charAt(Math.floor(Math.random() * Password.length));
    }
    setText(generatedPassword);
  }



  return (
    <div class="d-flex flex-column justify-content-center my-lg-5 p-2">
      <p class="mx-auto" style={{color:"white"}}><h2>Password Generator</h2></p>
     
        <input type="text" value={text} ref={passwordRef} style={{background:"#DCDCDC",color:"black"}} onChange={handleOnChange}></input>
        <div><button type="button" class="btn btn-primary text-center my-2"  onClick={copyText}>Copy</button></div>
    
    
        <div style={{color:"white"}}><h4>Length</h4></div>
        <div><input type="number" value={length} style={{background:"#DCDCDC",color:"black",width:"100px"}}  onChange={(e) => setLength(parseInt(e.target.value))}
          min={8}
          max={32}></input></div>
      
      <div class="btn-group my-3 d-flex flex-row justify-content-center"  role="group" aria-label="Basic checkbox toggle button group">
    
            <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off" checked={useNum}
              onChange={(e) => setUseNum(e.target.checked)} />
            <label class="btn btn-outline-primary mx-1 rounded"  htmlFor="btncheck1">Include Numbers</label>
            
        
            <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off" checked={useSpecialC}
              onChange={(e) => setUseSpecialC(e.target.checked)} />
            <label class="btn btn-outline-primary mx-1 rounded" htmlFor="btncheck2">Include Special Characters</label>
         
      </div>
      <div class="mx-auto my-4">
        <button type="button" class="btn btn-primary" onClick={generatePass}>Generate Password</button>
      </div>
    </div>

  );
}

export default App;
