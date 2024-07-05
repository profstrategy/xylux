import { Outlet } from 'react-router-dom';


import About from './About';
import useShowNav from '@/Hooks/useShowNav';
import RouteEntry from './RouteEntry';

const AppLayout = () => {
 const showNav = useShowNav()

  return (
    <div>
      {showNav ? (
        <div>
          <Outlet />
          <main>
            <RouteEntry />
          </main>
        </div>
      ) : (
        <div>
          
          <About />
        </div>
      )}
    </div>
  );
};

export default AppLayout;
