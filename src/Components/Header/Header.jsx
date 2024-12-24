import exit from '../../assets/header/exit.svg'
import profile from '../../assets/header/profile.svg'
import image from '../../assets/header/image.svg'
import { useNavigate } from 'react-router-dom'
import { logOut } from '../../api/logOut'

const Header = () => {
  const navigate = useNavigate();   
  return (
    <header className="bg-white w-screen fixed top-0 left-0 z-10" >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-[9px] lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5 font-semibold text-[28px] hover:scale-[1.2] transition-transform">
            <span className="sr-only">Your Company</span>
            UniWorkout
          </a>
        </div>
        <div className="flex gap-x-6">
          <a  className="hover:scale-[1.2] transition-transform cursor-pointer max-[440px]:hidden" onClick={() => { navigate('/workouts')}}><img src={image} alt="" /></a>
          <a  className="hover:scale-[1.2] transition-transform cursor-pointer max-[440px]:hidden" onClick={() => { navigate('/profile')}}><img src={profile} alt="" /></a>
          <a  className="hover:scale-[1.2] transition-transform cursor-pointer" onClick={() => logOut()}><img src={exit} alt="" /></a>
        </div>
      </nav>
    </header>
  )
}

export default Header;