import { useState } from "react";
import { addNewExersize } from "../../api/Exersizes.js";
import { useNavigate } from "react-router-dom";
import HeaderBottom from "../Header/HeaderBottom.jsx";
import Input from "../UI/Input.jsx";

const AddNewExersizePage = () => {
  const navigate = useNavigate();
  const [exerciseDetails, setExerciseDetails] = useState({
    name: '',
    times: '',
    iconPath: '',
  });
  const [selectedExercise, setSelectedExercise] = useState('');

  const exercises = [
    { id: 'back', iconPath: '/uploads/exercises/back.svg', src: 'http://localhost:5000/uploads/exercises/back.svg' },
    { id: 'biceps', iconPath: '/uploads/exercises/biceps.svg', src: 'http://localhost:5000/uploads/exercises/biceps.svg' },
    { id: 'chest', iconPath: '/uploads/exercises/chest.svg', src: 'http://localhost:5000/uploads/exercises/chest.svg' },
    { id: 'hit', iconPath: '/uploads/exercises/hit.svg', src: 'http://localhost:5000/uploads/exercises/hit.svg' },
    { id: 'legs', iconPath: '/uploads/exercises/legs.svg', src: 'http://localhost:5000/uploads/exercises/legs.svg' },
    { id: 'shoulders', iconPath: '/uploads/exercises/shoulders.svg', src: 'http://localhost:5000/uploads/exercises/shoulders.svg' },
  ];

  const updateDetails = (newDetails) => {
    const updatedDetails = { ...exerciseDetails, ...newDetails };
    setExerciseDetails(updatedDetails);
  }

  const selectExercise = (id, iconPath) => {
    if (selectedExercise === id) {
      setSelectedExercise('');
      setExerciseDetails({ name: '', times: '', iconPath: '' });
    } else {
      setSelectedExercise(id);
      setExerciseDetails((prev) => ({
        ...prev,
        iconPath: iconPath,
      }));
    }
  };

  return (
    <div className="bg-white w-screen fixed top-[60px] left-0 h-[100vh] overflow-auto">
      <div className="h-[378px] flex justify-center items-center bg-[url('/src/assets/BG/AddWorkOut.png')] bg-no-repeat bg-cover rounded-b-3xl"><p className="font-bold font-['Roboto] text-[#F1E8E8] text-[52px] relative top-0 left-0">Создание нового упражнения</p></div>
      <div className="m-auto min-[450px]:w-[400px] md:w-[672px] rounded-3xl flex flex-col justify-center px-8  bg-white">
        <div className="mt-8 sm:mx-auto sm:w-full mb-32">
          <form className="space-y-4" action="#" method="POST" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm/6 font-medium text-gray-900">Название</label>
              <div className="mt-2">
                  <Input 
                  onChange={(e) => updateDetails({ name: e.target.value })} 
                  value={exerciseDetails.name} 
                  placeholder="Введите название упражнения" 
                  type="text"/>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">Количество повторений</label>
              </div>
              <div className="mt-2">
                <Input 
                onChange={(e) => updateDetails({ times: Math.max(e.target.value, 1) })} 
                value={exerciseDetails.times} 
                placeholder="Введите кол-во повторений"
                type="text"/>
              </div>
            </div>
              <ul className="flex mx-auto w-full gap-[18px] justify-center">
                {exercises.map((exercise) => (
                  <inpit 
                  type="radio"
                    key={exercise.id}
                    name="ok"
                    className={`cursor-pointer border-2 rounded ${selectedExercise === exercise.id ? 'border-blue-500' : 'border-transparent'}`}
                    onClick={() => selectExercise(exercise.id, exercise.iconPath)}>
                    <img src={exercise.src} alt={exercise.id} />
                  </inpit>
                ))}
              </ul>
            <div>
              <button onClick={() => {
                addNewExersize(exerciseDetails);
                setExerciseDetails({ name: '', times: '', iconPath: '' });
              }} type="submit" className="flex w-full justify-center rounded-lg bg-btnColor px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Создать</button>
            </div>
          </form>
        </div>
      </div>
      <HeaderBottom/>
    </div>
  )
}

export default AddNewExersizePage;