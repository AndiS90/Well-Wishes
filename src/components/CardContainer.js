import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import Victor from './pages/Victor';
import Mahum from './pages/Mahum';
import Josh from './pages/Josh';
import Brenna from './pages/Brenna';
import Brie from './pages/Brie';
import Kaleb from './pages/Kaleb';
import Lane from './pages/Lane';
import Andi from './pages/Andi';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import './pages/assets/css/styles.css';



export default function CardContainer() {
  const [currentPage, setCurrentPage] = useState('Home');
  

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Victor') {
      return <Victor />;
    }
    if (currentPage === 'Mahum') {
      return <Mahum />;
    }
    if(currentPage === 'Josh'){
      return <Josh />;
  }
  if(currentPage === 'Brenna'){
    return <Brenna />;
}
if(currentPage === 'Brie'){
  return <Brie />;
}
if(currentPage === 'Kaleb'){
  return <Kaleb />;
}
if(currentPage === 'Lane'){
  return <Lane />;
}
if(currentPage === 'Andi'){
  return <Andi />;
}
};

  const handlePageChange = (page) => setCurrentPage(page);

  return (
   <div>

  {renderPage()}
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs class="navtabs" currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
     
    
    </div>
   
  );
};
