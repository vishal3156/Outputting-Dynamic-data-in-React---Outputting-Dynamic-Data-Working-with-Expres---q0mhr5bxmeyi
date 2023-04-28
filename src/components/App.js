import React,{useState,useEffect} from 'react'
import '../styles/App.css';
const App = () => {
  const [name, setName] = useState('');
  
  const handleInputChange = (event) => {
    setName(event.target.value);
  };
  
  const handleButtonClick = () => {
    const textElement = document.getElementById('text');
     textElement.innerText = `Hello my name is ${name} and I study at Newton School`;
  };
  
  useEffect(() => {
    
  }, [name]);
  
  return (
    <div id="main">
      <input id='input' onChange={handleInputChange}></input>
      <button id='button' onClick={handleButtonClick}>Click</button>
      <p id='text'> Hello my name is ____ and I study at Newton School</p>
    </div>
  )
}


export default App;
