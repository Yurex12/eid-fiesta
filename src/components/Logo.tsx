import { logo } from '../assets';

function Logo() {
  return (
    <div className='shrink-0'>
      <a href='#'>
        <img className='h-[70px] md:h-[100px]' src={logo} alt='logo' />
      </a>
    </div>
  );
}

export default Logo;
