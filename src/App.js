import { useEffect } from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Part2 from './components/Part2';

function App() {
  window.addEventListener("resize", function() {
    window.location.reload(); // Reload the page on any window width change
  });
  return (
    <>
    <div className='bg-black'>

     <Navbar/>
     <Part2/>
     <Footer/>
    </div>
    </>
  );
}

export default App;
