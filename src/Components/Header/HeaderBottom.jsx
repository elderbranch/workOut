import React from 'react'
import { useNavigate } from 'react-router-dom';
import profile from '../../assets/header/profile.svg'
import image from '../../assets/header/image.svg'

const HeaderBottom = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-4 mb-24 mx-auto flex  items-center justify-center gap-11 min-[440px]:hidden">
      <a onClick={() => { navigate('/workouts') }}><img src={image} alt="" /></a>
      <a onClick={() => { navigate('/workout') }}><img src={profile} alt="" /></a>
    </div>
  )
}

export default HeaderBottom;