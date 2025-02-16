import LogoCard from './LogoCard'
import Profile from './Profile'

export default function Navbar() {
  return (
    <div className='bg-onyx h-[35px] flex justify-between'>
      <div className='pt-[4px] px-[5px] text-white text-lg font-semibold'>
        Draw App
      </div>
      <div className='pt-[3px] px-[10px] cursor-pointer'>
        <Profile/>
      </div>
      <div className="">
        <LogoCard/>
      </div>
    </div>
  )
}
