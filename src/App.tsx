import { useEffect, useState } from 'react';
import { HangImage } from './components/HangImage';
import { letters } from './helpers/letters';
import './App.css'
import { getRandomWord } from './helpers/getRandomWord';

function App() {

  const [word,setWord]= useState(getRandomWord);
  const [hiddenWord, setHiddenWord]=useState('_ '.repeat(word.length));
  const [attempts, setAttempts]=useState(0)
  const [lose,setLose]= useState(false);
  const [won,setWone]= useState(false);

  //ejecutar solo si la persona perdió
  useEffect(()=>{
      if(attempts>=9){
        setLose(true);
      }
  },[attempts]);

  // determinar si la persona ganó
  useEffect(()=>{
    const currentHiddenWord=hiddenWord.split(' ').join('');
    if(currentHiddenWord===word){
        setWone(true);
    }
  },[hiddenWord, word]);

  const checkLetter=(letter:string)=>{
    if(lose) return;
    if(won)return;
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

    const newGame=()=>{
      const newWord=getRandomWord();
        setWord(newWord);
        setHiddenWord('_ '.repeat(newWord.length));
        setAttempts(0);
        setLose(false);
        setWone(false);

    }

 return (
  <div className='App'>
    {/* Imágenes */}
   <HangImage imageNumber={attempts}/>
     {/* Palabra oculta */}
    <h3>{hiddenWord}</h3>
     {/* Contador de intentos */}
    <h3>intentos: {attempts}</h3>

    {/* Mensaje si perdió */}
    {
      (lose) ? <h2><span style={{backgroundColor:'red',color:'white', padding:'0 5px'}}>PERDIÓ</span> la palabra era <u>{word}</u></h2>:''
    }
    {/* Mensaje si ganó */}
    {
      (won) ? <h2>felicidades usted <span style={{backgroundColor:'yellow', padding:'0 5px'}}>GANÓ</span></h2>:''
    }
    {/* Botones de letras */}
    {
      letters.map(letter=>(
        <button onClick={()=>checkLetter(letter)} key={letter}>{letter}</button>
      ))
    }

    <br /><br />
    <button onClick={newGame} style={{backgroundColor:'#E893CF'}}>Reiniciar</button>
  </div>
 )
  
}

export default App
