import peoples from '../../assets/BG/peoples.svg'
import arrow from '../../assets/header/arrow.svg'
import HeaderBottom from '../Header/HeaderBottom';
import { useWorkOutStore } from '../../stores/workOutPageStore';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Worksouts = () => {
  const { workOuts, fetchWorkOuts } = useWorkOutStore();
  
  const calculateTotalTimes = (exercises) => {
    return exercises.reduce((total, exercise) => total + exercise.times, 0);
  };

  const navigate = useNavigate();

  useEffect(() => {
    fetchWorkOuts();
  }, [])

  return (
    <div className='mt-[60px]'>
      <span
        className='fixed top-[85%] left-[90%] z-10 bg-slate-200 rounded-[50%] w-[70px] h-[70px] shadow-xl cursor-pointer hover:scale-[1.2] transition-transform'
        onClick={() => { navigate('/work') }}>
        <img src={arrow} className='absolute top-[25%] left-[25%] w-9 h-9' alt="" />
      </span>
      <div className="h-[795px] w-full flex justify-center bg-[url('/src/assets/BG/workoutBack.jfif')] bg-no-repeat bg-cover">
        <div className="relative top-[25%]">
          <div className="font-black text-[#F6F6F6] w-[558px] text-[60px] tracking-[4%]">TRANSFORM YOUR LIFE WITH FITLIFE STUDIO</div>
          <div className="text-[#D1D1D1] leading-[30px] w-[558px] text-[20px]">Join FitLife Studio Today and Experience Expert Training, Personalized Programs, and a Supportive Community to Achieve Your Fitness Goals.</div>
        </div>
        <img src={peoples} alt="" />
      </div>
      <div className='mx-auto flex flex-col items-center justify-center h-96 '>
        <h1 className='text-[38px] leading-[50px] mt-16'>Workouts</h1>
        <div className='grid w-[80vw] grid-rows-none sm:grid-cols-3 grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-10 mb-10 p-4 max-w-[1230px]'>
          {workOuts.map((item) => (
            <div key={item.id} className="relative bg-white py-3 shadow-md pt-5 px-6 pb-7 rounded-xl">
                <Link to={`/workoutDetails/${item.id}`}>
                <div className="font-semibold text-lg">
                  {item.name}
                </div>
                <div className='font-normal text-sm text-[#81809E] tracking-wide '>
                  {item.exercises.length} Exercises • {calculateTotalTimes(item.exercises)} Min
                </div>
            </Link>
              </div>
          ))}
        </div>
      </div>
      <HeaderBottom />
    </div>
  )
}

export default Worksouts