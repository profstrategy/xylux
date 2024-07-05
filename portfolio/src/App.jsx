import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import './App.css';
import About from './Pages/About';
import ContactMe from './Pages/ContactMe';
import NotFound from './Pages/NotFound';
import AppLayOut from './Pages/AppLayOut';
import Experience from './Pages/Experience';
import Projects from './Pages/Projects';
import useChangeRoute from './Hooks/useChangeRoute';

function App() {
  const { changeRoute } = useChangeRoute()

  return (
    <BrowserRouter>
      <Routes>

        {changeRoute ? (
          <Route element={<AppLayOut />}>
            <Route index element={<Navigate replace to='about' />} />
            <Route path='about' element={<About />} />
            <Route path='projects' element={<Projects />} />
            <Route path='contact' element={<ContactMe />} />
            <Route path='experience' element={<Experience />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        ) :
          <><Route index element={<Navigate replace to='about' />} />
            <Route path='about' element={<About />} />
            <Route path='projects' element={<Projects />} />
            <Route path='contact' element={<ContactMe />} />
            <Route path='experience' element={<Experience />} />
            <Route path='*' element={<NotFound />} /></>}

      </Routes>
    </BrowserRouter>
  );
}

export default App;

