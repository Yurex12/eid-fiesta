import { HiMenu } from 'react-icons/hi';
import { links } from '../constants';
import { useState } from 'react';

import MobileNav from './MobileNav';

function NavBar() {
  const [isOpen, setIsopen] = useState(false);

  const closeNav = (): void => setIsopen(false);

  return (
    <nav className='flex space-x-10 font-semibold items-center'>
      <ul className='hidden space-x-10 lg:flex'>
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

      <div className='flex items-center justify-center lg:hidden'>
        <div>
          {/*           
            <HiXMark
              className='h-6 w-6 md:w-8 md:h-8 text-brandOrange'
              onClick={() => setIsopen(false)}
            /> */}

          <HiMenu
            className='h-6 w-6 md:w-8 md:h-8 text-brandOrange'
            onClick={() => setIsopen(true)}
          />

          {isOpen && <MobileNav closeNav={closeNav} />}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
