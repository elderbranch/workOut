import exit from '../../assets/header/exit.svg'
import profile from '../../assets/header/profile.svg'
import image from '../../assets/header/image.svg'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  // const nav = useNavigate();   
  return (
    <header className="bg-white w-screen fixed top-0 left-0">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-[9px] lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5 font-semibold text-[28px]">
            <span className="sr-only">Your Company</span>
            UniWorkout
          </a>
        </div>
        <div className="flex gap-x-6">
          <a  className=""><img src={image} alt="" /></a>
          <a  className=""><img src={profile} alt="" /></a>
          <a  className=""><img src={exit} alt="" /></a>
        </div>
      </nav>
    </header>
  )
}

export default Header;