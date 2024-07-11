import { useState } from "react";

import './App.css';
import Home from './Pages/Home';
import About from './Pages/About'

function App() {

  const [isOpen, setIsopen] = useState(false);

  const handleIsOpen = () => {
      setIsopen((notOpen) => !notOpen)  
    }
  

  return (
   <div>
    <Home isOpen={isOpen} isHandleIsOpen={handleIsOpen} />
    <About />
   </div>
  );
}

export default App;

