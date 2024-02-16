import { hero } from '../assets';

function Hero() {
  return (
    <section>
      <div className='container mt-10 md:mt-[70px] md:w-[80%] mx-auto px-8 flex flex-col-reverse items-center justify-between lg:flex-row'>
        {/* left item */}
        <div className='lg:max-w-[358px]  w-full space-y-4 mt-8'>
          <h1 className='font-bold text-[25px] leading-7 text-brandOrange capitalize md:text-5xl md:font-black  text-center lg:text-left'>
            eid fiesta 2.0
          </h1>

          <p className='font-semibold text-[14px]  tracking-wide  lg:leading-8 leading-6 text-center lg:text-left lg:text-[20px]  lg:w-full'>
            An immersive experience of <br className='md:hidden lg:block' />
            festive, games, and community.
          </p>

          {/* btn */}
          <div className='w-[290px] mx-auto lg:mx-0 md:space-y-2 flex items-center space-x-3 lg:block lg:space-x-0'>
            <button className=' w-[140px] h-[40px] lg:w-[245px] lg:h-[55px] border-2 border-brandRed  text-brandRed rounded-full text-[12px] lg:text-[16px]'>
              Join as a vendor
            </button>
            <button className='btn w-[140px] h-[40px] lg:w-[233px] lg:h-[55px] text-white rounded-full text-[10px] lg:text-[16px]'>
              Grab a ticket
            </button>
          </div>
        </div>
        {/* right item */}
        <div className='lg:basis-1/2 pt-5"'>
          <img src={hero} alt='' />
        </div>
      </div>
    </section>
  );
}

export default Hero;
