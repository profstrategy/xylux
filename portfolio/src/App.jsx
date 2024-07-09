import { useState } from "react";

import './App.css';
import Home from './Pages/Home';

function App() {

  const [isOpen, setIsopen] = useState(false);

  const handleIsOpen = () => {
      setIsopen((notOpen) => !notOpen)  
    }
  

  return (
   <div>
    <Home isOpen={isOpen} isHandleIsOpen={handleIsOpen} />
   </div>
  );
}

export default App;

