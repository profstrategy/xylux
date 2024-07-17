import { useState } from "react";

import './App.css';
import Home from './Pages/Home';
import About from './Pages/About'
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import ContactMe from "./Pages/ContactMe"

function App() {

  const [isOpen, setIsopen] = useState(false);

  const handleIsOpen = () => {
      setIsopen((notOpen) => !notOpen)  
    }
  

  return (
   <div className="wrapper">
    <Home isOpen={isOpen} isHandleIsOpen={handleIsOpen} />
    <About />
    <Skills />
    <Projects />
    <ContactMe />
   </div>
  );
}

export default App;

