import { useEffect } from "react";
import { useWorkOutStore } from "../../stores/workOutPageStore";
import { useParams } from "react-router-dom";


const WorkOutBox = () => {
  const { id } = useParams();
  const {singleWorkOut , fetchSinglehWorkOuts} = useWorkOutStore();

  const calculateTotalTimes = (exercises) => {
    return exercises.reduce((total, exercise) => total + exercise.times, 0);
  };
  
  
  useEffect(() => {
    fetchSinglehWorkOuts(id); 
  }, [id])
  console.log();
  
  return (
    <div className='mt-[60px]' onClick={() => console.log(singleWorkOut)}>
      <div className="h-[540px] flex justify-center items-center bg-[url('/src/assets/BG/details.png')] bg-no-repeat bg-cover rounded-b-3xl"><p className="font-bold font-['Roboto] text-[#F1E8E8] text-[52px] relative top-0 left-0">{singleWorkOut.id} 
        {calculateTotalTimes(singleWorkOut?.exercises)}
        </p></div>
      <div className="flex flex-col mx-auto w-[770px] mt-14" >
        {singleWorkOut?.exercises?.map((ex) => (
          <div key={ex.id} className="flex bg-[#511734] w-full max-w-[770px] rounded-lg justify-between items-center px-9 py-3 mb-[30px] text-white">
            <p className="text-2xl font-normal">{ex.name}</p>
            <img className="invert" src={`http://localhost:5000${ex.iconPath}`} alt="" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default WorkOutBox;