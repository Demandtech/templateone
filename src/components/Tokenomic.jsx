import underline from '../assets/underline.svg'
import starSvg from '../assets/star2.svg'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
const Tokenomic = () => {

 useEffect(() => {
   Aos.init({ duration: 1000 })
 })

  return (
    <div data-aos='fade-up' className='text-white px-5 py-10 ' id='tokenomics'>
      <div className='flex flex-col items-center mb-20'>
        <h2 className='text-5xl md:text-8xl z-10' data-aos='zoom-in'>
          Tokenomics
        </h2>
        <img width='100px' src={underline} alt='' />
        <div><img src={starSvg} alt="" /></div>
      </div>
      <div className='flex gap-5 flex-col md:flex-row'>
        <div className='flex-1 text-center'>
          <div className='mb-5'>
            <p className='text-2xl'>Initial Supply</p>
            <h4 data-aos='zoom-in' className='text-4xl text-btnHover font-bold'>
              420,690,000,000
            </h4>
            <span className='text-2xl text-gray-500'>Four-Twenty-billion</span>
          </div>
          <div>
            <h4 className='text-2xl'>Total BUY/SELL TAX</h4>
            <h4 data-aos='zoom-in' className='text-4xl text-btnHover font-bold'>
              0%
            </h4>
          </div>
        </div>
        <div className='text-2xl flex-1 space-y-5'>
          <p data-aos='fade-left'>
            We have a unique contract that allows you to pay 0 tax on buy and
            sells, but our contract still takes a portion of tokens from the LP
            pool to liquidate for marketing.
          </p>
          <p data-aos='fade-right'>
            We will in turn auto buy back and burn and add to LP (along with
            marketing) to off-set this affect.
          </p>
          <p data-aos='fade-left'>
            As long as we have volume, $RICK has funding
          </p>
        </div>
      </div>
    </div>
  )
}

export default Tokenomic
