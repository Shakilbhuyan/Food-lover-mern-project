import React, { useEffect, useState } from 'react';
import logo from '../../../../public/7d8f347b-5120-4b03-9763-ae419ea38b25.png'

const Navber = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

 

  
  return (
   <div
   className={`navbar text-4xl hover:bg-white fixed w-full z-50 transition duration-300 ease-in-out ${
    isScrolled ? 'bg-white shadow text-black' : 'bg-transparent text-red-600'
  }`}
 >
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li><a>Item 1</a></li>
          <li>
            <a>Parent</a>
            <ul className="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </li>
          <li><a>Item 3</a></li>
        </ul>
      </div>
     <img src={logo} className='h-16'  alt="" />
     {/* logo for hover */}
    {/* <Logo></Logo> */}
    
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        <li><a>Item 1</a></li>
        <li>
          <details>
            <summary>Parent</summary>
            <ul className="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </details>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <div className="navbar-end">
      <a className="btn">Button</a>
    </div>
  </div>
  );
};

export default Navber;