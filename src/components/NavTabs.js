import React from 'react';




// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <footer class="footer">
      <div>
    <h1>Messages from: <span class=""></span>
    {/* <img class='underline' src={underline} alt="gold ornate underline decoration" /> */}
    </h1>
    </div>
    <nav>
    <ul className=" ">
      {/* <li className="" >
          
          <a href="#home" onClick={() => handlePageChange('Home')}         
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link' 
          >
          Home
          </a>
      </li> */}
      <li className="">
        <a href="#home" onClick={() => handlePageChange('Home')}
       
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
          >
          Home
        </a>
      </li>
        <li className="" >
        <a href="#victor" onClick={() => handlePageChange('Victor')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Victor' ? 'nav-link active' : 'nav-link'}
          >
          Victor
        </a>
      </li>
      <li className="" >
        <a href="#mahum" onClick={() => handlePageChange('Mahum')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Mahum' ? 'nav-link active' : 'nav-link'}
          >
          Mahum
        </a>
      </li>
      <li className="" >
        <a href="#josh" onClick={() => handlePageChange('Josh')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Josh' ? 'nav-link active' : 'nav-link'}
          >
          Josh
        </a>
      </li>
      <li className="" >
        <a href="#brenna" onClick={() => handlePageChange('Brenna')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Brenna' ? 'nav-link active' : 'nav-link'}
          >
          Brenna
        </a>
      </li>
      <li className="" >
        <a href="#brie" onClick={() => handlePageChange('Brie')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Brie' ? 'nav-link active' : 'nav-link'}
          >
          Brie
        </a>
      </li>
      <li className="" >
        <a href="#kaleb" onClick={() => handlePageChange('Kaleb')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Kaleb' ? 'nav-link active' : 'nav-link'}
          >
          Kaleb
        </a>
      </li>
      <li className="" >
        <a href="#lane" onClick={() => handlePageChange('Lane')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Lane' ? 'nav-link active' : 'nav-link'}
          >
          Lane
        </a>
      </li>
      <li className="" >
        <a href="#andi" onClick={() => handlePageChange('Andi')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Andi' ? 'nav-link active' : 'nav-link'}
          >
          Andi
        </a>
      </li>

    </ul>
    </nav>


    </footer>
  );
}

export default NavTabs;
