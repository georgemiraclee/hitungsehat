import { HiArrowLongRight } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import { HeroImg } from '../../assets';
import Button from '../button/Button';

const Hero = () => {
  return (
    <section className='font-Poppins'>
      <div className='container mx-auto overflow-hidden px-4 py-10 md:py-0 md:px-0'>
        <div className='flex h-screen w-full flex-col items-center justify-center gap-y-6 md:flex-row'>
          <div data-aos='fade-left' className='flex w-full flex-col text-center md:order-1 md:w-1/2 md:text-left'>
            <h1 className='mb-6 text-2xl font-bold sm:text-3xl md:text-6xl'>
              <span className='block text-main'>Hitung Sehat,</span> Buat dirimu yang lebih{' '}
              <span className='italic underline decoration-main'>
                <TypeAnimation
                  sequence={['Sehat', 1000, 'Bugar', 1000, 'Semangat', 1000]}
                  wrapper='span'
                  repeat={Infinity}
                />
              </span>
            </h1>
            <p className='mx-auto mb-6 w-72 text-sm text-slate-400 sm:w-auto sm:text-base'>
              Biarkan kami memberikan informasi kesehatan untuk membantu solusi kamu untuk hidup sehat.
            </p>
            <a href='/kalkulator-kalori' className='mx-auto block md:mx-0'>
              <Button className={`group flex items-center gap-3 hover:opacity-90`}>
                Mulai Hitung{' '}
                <span className='text-xl font-bold group-hover:translate-x-2'>
                  <HiArrowLongRight />
                </span>
              </Button>
            </a>
          </div>
          <div data-aos='fade-right' className='mx-auto'>
            <img src={HeroImg} alt='Hero Image' className='w-full' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
