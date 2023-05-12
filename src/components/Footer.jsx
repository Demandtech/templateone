import { FaTelegramPlane, FaTwitter } from 'react-icons/fa'
const Footer = () => {
  return (
    <footer className='text-white p-5 flex items-center justify-between border-t-2'>
      <span>Copyright &copy; {new Date().getFullYear()} $Coins</span>
      <div className='flex text-black gap-2'>
        <div className='bg-white rounded-full p-2'>
          <FaTelegramPlane className='text-2xl' />
        </div>
        <div className='bg-white rounded-full p-2'>
          <FaTwitter className='text-2xl' />
        </div>
      </div>
    </footer>
  )
}

export default Footer
