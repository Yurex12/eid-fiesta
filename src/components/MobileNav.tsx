import { links } from '../constants';
import { useOutsideClick } from '../hooks/useOutsideClick';

type MobileNavProps = {
  closeNav: () => void;
};

function MobileNav({ closeNav }: MobileNavProps) {
  const ref = useOutsideClick(closeNav);

  return (
    <div className='fixed top-0 left-0 w-full h-screen backdrop-blur-sm  z-50 transition-all duration-1000 text-white sidebar'>
      <div
        className='fixed top-0 left-0 w-[222px] h-screen transform  bg-[#060606] shadow-lg transition-all duration-1000'
        ref={ref}
      >
        <ul className='divide-y-[1px] divide-slate-400 px-6'>
          {links.map((link) => (
            <li key={link.id} className='px-1'>
              <a href={`#${link.id}`} className='block w-full py-4 text-[14px]'>
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <div className='flex items-center justify-center mt-10'>
          <a
            href='#'
            className='btn w-36 px-10 py-2 text-white rounded-full text-[16px]'
          >
            Tickets
          </a>
        </div>
      </div>
    </div>
  );
}

export default MobileNav;
