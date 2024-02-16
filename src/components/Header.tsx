import Logo from './Logo';
import NavBar from './NavBar';

function Header() {
  return (
   
    <header className=' mx-auto  flex items-center justify-between px-8 shadow-md bg-white'>
       <Logo />
       <NavBar /> 
    </header>
  );
}

export default Header;
