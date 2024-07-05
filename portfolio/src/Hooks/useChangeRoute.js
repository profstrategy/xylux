import { useState, useEffect } from 'react';

const useChangeRoute = () => {
    const [changeRoute, setChangeRoute] = useState(null);

    useEffect(() => {

        function handleResize() {

            //check if width of the window is 767px 
            if (window.innerWidth <= 767) {
                setChangeRoute(true)
            }
            else {
                setChangeRoute(false)
            }
        }

        // add an eventListener
        window.addEventListener('resize', handleResize)

        // Initial check on component mount
       window.innerWidth <= 767 ? handleResize() : null;

        // clean the function up after execution
        return () => {
            window.removeEventListener('resize', handleResize)
        }

    }, [])

    return { changeRoute }

}

export default useChangeRoute
