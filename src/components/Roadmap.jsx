import underline from '../assets/underline.svg'
import starSvg from '../assets/star2.svg'
import dotImg from '../assets/dot.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const roadMapcontent = [
  {
    title: 'Everything',
    text: 'Beavis&Butthead will release the white paper in the first days after going live. Our vision is to be a universal meme-coin. THE meme-coin of all chains if you will.',
  },
  {
    title: 'Benefit',
    text: 'As an early buyer on the BSC chain, holders will benefit from alot of incentives and contest that is going to be activated.',
  },
  {
    title: 'Social',
    text: 'NOTHING is more important than community.Therefore nothing is more important than both creating a project that the masses can rally behind as well as having an exemplary team of leaders experienced in cultivating growth from all angles.',
  },
]

const Roadmap = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  })
  return (
    <div className='text-white px-5 pb-10' id='roadmap'>
      <div className='flex flex-col items-center mb-20'>
        <h2 className='text-6xl md:text-8xl z-10' data-aos='zoom-in'>
          Roadmap
        </h2>
        <img width='100px' src={underline} alt='' />
        <div>
          <img src={starSvg} alt='' />
        </div>
      </div>
      <div
        className='md:space-y-0 flex flex-col md:flex-row items-start gap-10'
        data-aos='fade-up'
      >
        {roadMapcontent.map((content, index) => {
          return (
            <div
              data-aos='fade-down'
              data-aos-duration={(index + 1) * 1000}
              key={index}
              className='flex-1 flex items-start gap-5'
            >
              <img src={dotImg} alt='' data-aos='zoom-in' data-aos-duration='1500'/>
              <div>
                <h4 className='text-3xl mb-5 text-btnHover'>
                  (<span className='text-red-500'>{content.title}</span>)
                </h4>
                <p>{content.text}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Roadmap
