import React, { Suspense,lazy, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Pageconter from './Pageconter';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const App = lazy(() => {
  return new Promise(resolve=>{
    setTimeout(()=>{
      resolve(import("./App"))
    },1000)
  })
});


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/Montmartre",
    element: <Pageconter text={'Montmartre'} image={'https://fabbricagroup.fr/wp-content/uploads/2022/06/Montmartre-1.svg'}/> ,
  },
  {
    path: "/Ternes",
    element: <Pageconter text={'Ternes'} image={'https://fabbricagroup.fr/wp-content/uploads/2022/06/Ternes-1.svg'}/> ,
  },
  {
    path: "/Saint-Georges",
    element: <Pageconter text={'Saint-Georges'} image={'https://fabbricagroup.fr/wp-content/uploads/2022/06/Saint-Georges-1.svg'}/> ,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Suspense fallback={<div className='bod'><span className="loader">Loading</span></div>} >
    <RouterProvider router={router} />
  </Suspense>
  //  {/* </React.StrictMode> */}
);