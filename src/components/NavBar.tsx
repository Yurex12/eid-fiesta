import { HiMenu } from 'react-icons/hi';
import { links } from '../constants';
import { useState } from 'react';

import MobileNav from './MobileNav';

function NavBar() {
  const [isOpen, setIsopen] = useState(false);

  const openNav = (): void => setIsopen(true);
  const closeNav = (): void => setIsopen(false);

  return (
    <nav className='flex space-x-10 font-semibold items-center'>
      <ul className='hidden space-x-10 xl:flex'>
        {links.map((link) => (
          <li key={link.id}>
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>

      <div className='hidden md:block'>
        <a
          href='#'
          className='btn px-10 py-2 text-white rounded-full text-[16px]'
        >
          Tickets
        </a>
      </div>

      <div className='flex items-center justify-center xl:hidden'>
        {/*           
            <HiXMark
              className='h-6 w-6 md:w-8 md:h-8 text-brandOrange'
              onClick={() => setIsopen(false)}
            /> */}

        <HiMenu
          className='h-5 w-5 md:w-8 md:h-8 text-brandOrange cursor-pointer'
          onClick={openNav}
        />

        {isOpen && <MobileNav closeNav={closeNav} />}
      </div>
    </nav>
  );
}

export default NavBar;
