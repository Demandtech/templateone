import heroImg from '../assets/hero-img.webp'
import coinImg from '../assets/coin.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
const Hero = () => {

  useEffect(()=>{
    Aos.init({duration:1000})
  })
  return (
    <div
      id='about'
      className='text-white p-5 flex flex-col-reverse md:flex-row-reverse items-center text-center'
    >
      <div className='flex-1 text-2xl relative'>
        <div className='absolute animate-spin-slow duration-100 flex items-center justify-center w-full -z-0'>
          <img className='-z-0' src={coinImg} alt='' />
        </div>
        <div className='flex flex-col items-center  gap-5 z-10'>
          <p className='z-10' data-aos='fade-right'>
            Rick C-137 is a sociopathic mad scientist who seems to know
            everything in the universe and thus finds life a traumatizing and
            pointless experience.
          </p>

          <a
            className='btn font-extralight border-2 px-5 py-2 rounded-full border-btnHover hover:text-btnHover hover:border-white transition-all duration-500 z-10'
            href='#'
            data-aos='zoom-in-up'
          >
            Contract
          </a>

          <p className='z-10' data-aos='fade-left'>
            Zero Tax Ownership Renounced Liquidity Locked THE CONTRACT IS FULLY
            VERIFIED.
          </p>

          <a
            className='btn font-extralight border-2 px-5 py-2 rounded-full border-btnHover hover:text-btnHover hover:border-white transition-all duration-500 z-10'
            href='#'
            data-aos='zoom-in-up'
          >
            Buy Now
          </a>
        </div>
      </div>
      <div className='flex-1' data-aos='zoom-in-down'>
        <img src={heroImg} alt='' className='w-full object-cover' />
      </div>
    </div>
  )
}

export default Hero
