import { useState, useEffect } from 'react';

function useShowNav() {

  // useEffect(() => {
  //   function handleResize() {
  //     // Check if width of the window is 767px 
  //     if (window.innerWidth <= 767) {
  //       setShowNav(true);
  //     } else {
  //       setShowNav(false);
  //     }
  //   }

  //   // Add an event listener
  //   window.addEventListener('resize', handleResize);

  //   // Initial check on component mount
  //   handleResize();

  //   // Clean up the event listener after execution
  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []); // Empty dependency array ensures the effect runs only on mount


}



