import { useState } from 'react';
import { HangImage } from './components/HangImage';
import { letters } from './helpers/letters';
import './App.css'

function App() {

  const [word]= useState('COMPUTADORA');
  const [hiddenWord, setHiddenWord]=useState('_ '.repeat(word.length));

  const [attempts, setAttempts]=useState(0)

  const checkLetter=(letter:string)=>{
    if(!word.includes(letter)){
      setAttempts(attempts+1);
      return;
    }

    const hiddenWordArray=hiddenWord.split(' ');

    for(let i=0;i<word.length;i++){
      if(word[i]===letter){
          hiddenWordArray[i]=letter;
      }
    }
    setHiddenWord(hiddenWordArray.join(' '));
    // setAttempts(attempts+ 1);
    }
 return (
  <div className='App'>
    {/* Imágenes */}
   <HangImage imageNumber={attempts}/>
     {/* Palabra oculta */}
    <h3>{hiddenWord}</h3>
     {/* Contador de intentos */}
    <h3>intentos: {attempts}</h3>
    {/* Botones de letras */}
    {
      letters.map(letter=>(
        <button onClick={()=>checkLetter(letter)} key={letter}>{letter}</button>
      ))
    }
  </div>
 )
  
}

export default App
