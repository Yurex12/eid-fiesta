import Logo from './Logo';
import NavBar from './NavBar';

function Header() {
  return (
    <header className='max-w-[1440px] mx-auto  flex items-center justify-between px-6'>
      <Logo />
      <NavBar />
    </header>
  );
}

export default Header;
