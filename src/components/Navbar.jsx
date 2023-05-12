import { FaBars, FaTimes } from 'react-icons/fa'
import { useState } from 'react'


const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  return (
    <nav className='p-5 flex justify-end'>
      <ul
        className={`text-navText md:flex md:gap-10 absolute top-14 right-0 left-0 md:static space-y-4 md:space-y-0 text-center  ${
          isNavOpen ? '' : 'hidden md:flex'
        } ml-auto`}
      >
        <li  >
          <a className='font-extralight hover:underline' href='#about'>
            About
          </a>
        </li>
        <li>
          <a className='font-extralight hover:underline' href='#tokenomics'>
            Tokenomic
          </a>
        </li>
        <li>
          <a className='font-extralight hover:underline' href='#roadmap'>
            Roadmap
          </a>
        </li>
        <li>
          <a
            className='btn font-extralight border-2 px-5 py-2 rounded-full border-btnHover hover:text-btnHover hover:border-white transition-all duration-500'
            href='#'
          >
            Buy $coin
          </a>
        </li>
      </ul>
      <div className='md:hidden'>
        <button
          onClick={() => setIsNavOpen(!isNavOpen)}
          className='text-navText'
        >
          {isNavOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
