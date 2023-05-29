import { letters } from './helpers/letters';
import './App.css'
import { HangImage } from './components/HangImage';

function App() {
 return (
  <div className='App'>
    {/* Imágenes */}
   <HangImage imageNumber={9}/>
     {/* Palabra oculta */}
    <h3>_ _ _ _ _ _ _ _ _ _ _ _</h3>
     {/* Contador de intentos */}
    <h3>intentos: 0</h3>
    {/* Botones de letras */}
    {
      letters.map(letter=>(
        <button key={letter}>{letter}</button>
      ))
    }
  </div>
 )
  
}

export default App
