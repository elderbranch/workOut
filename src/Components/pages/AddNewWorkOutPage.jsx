import { useEffect } from 'react'
import { useExersizeWorkOutStore } from '../../stores/exersizeWorkOutStore'
import EmptyBox from '../UI/EmptyBox';
import { createWorkOut } from '../../api/workouts';

import Input from '../UI/Input';
import ExersizeBox from '../Boxes/ExersizeBox';
import Button from '../UI/Button';

const AddNewWorkOutPage = () => {
  const {
    exersizes,
    fetchExersizes,
    loading,
    error,
    nameOfSearchingExToAdd,
    setNameOfSearchingExToAdd,
    selectExersizes,
    selectedExersizes,
    setNameOfWorkOut,
    nameOfWorkOut,
    nameOfSearchingExIcon,
    setNameOfSearchingExIcon
  } = useExersizeWorkOutStore();

  const filteredExercises = exersizes.filter((ex) =>
    ex.name.toLowerCase().includes(nameOfSearchingExToAdd.toLowerCase()) &&
    ex.iconPath.toLowerCase().includes(nameOfSearchingExIcon.toLowerCase())
  );


  useEffect(() => {
    fetchExersizes();
  }, []);

  return (
    <div className="bg-white w-screen fixed top-[60px] left-0 h-[100vh] overflow-auto">
      <div className="h-[378px] flex justify-center items-center bg-[url('/src/assets/BG/AddWorkOut.png')] bg-no-repeat bg-cover rounded-b-3xl"><p className="font-bold font-['Roboto] text-[#F1E8E8] text-[52px] relative top-0 left-0">Создание новой тренировки</p></div>
      <div className='mx-auto w-[576px] mt-11 mb-11'>
        <label className='mb-1' htmlFor="ExersizeNameInput">Название: {nameOfSearchingExToAdd}</label>
        <Input onChange={(e) => setNameOfWorkOut(e.target.value)} value={nameOfWorkOut} placeholder="Введите название тренировки" />
      </div>
      <div className='max-w-[62em]   bg-inputBg mx-auto pt-8 pb-20 px-10 rounded-[32px]'>
        <h1 className='mx-auto table text-2xl font-normal mb-14'>Выберите упражнения для тренировки</h1>
        <div className='flex max-w-[430px]'>
          <Input onChange={(e) => setNameOfSearchingExToAdd(e.target.value)} value={nameOfSearchingExToAdd} placeholder="Поиск..." />
          <select
            onChange={(e) => setNameOfSearchingExIcon(e.target.value)}
            value={nameOfSearchingExIcon}
            id='ExersizeNameInput'
            className="block w- rounded-md bg-inputBg px-1 pr-[84px] text-base text-gray-900 outline outline-1 -outline-offset-1 outline-inputBorger placeholder:text-gray-600 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 ml-8">
            <option value="">All</option>
            <option value="/uploads/exercises/chest.svg">Chest</option>
            <option value="/uploads/exercises/back.svg">Back</option>
            <option value="/uploads/exercises/biceps.svg">Biceps</option>
            <option value="/uploads/exercises/hit.svg">Hit</option>
            <option value="/uploads/exercises/legs.svg">Legs</option>
            <option value="/uploads/exercises/shoulders.svg">Shoulders</option>
          </select>
        </div>
        <div className="grid grid-rows-none sm:grid-cols-3 grid-cols-2 lg:grid-cols-4 gap-5 mt-10 overflow-y-auto max-h-[400px]">
          {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <EmptyBox url={'/work'} title="Создать упражнение" />
          ) : (filteredExercises.length > 0) ? (
            filteredExercises.map((ex) => (
              <ExersizeBox
                id={ex.id}
                name={ex.name}
                iconPath={ex.iconPath}
                times={ex.times}
                setFunc={selectExersizes} />
            ))
          ) : (
            <EmptyBox url={'/work'} title="Создать упражнение" />
          )}
        </div>
      </div>
      <div className='mx-auto fit-con table mt-3'>
        <a >Создать новое упражнение</a>
      </div>
      <Button func={() => createWorkOut({ nameOfWorkOut, selectedExersizes })} text="Создать тренировку"/>
    </div>
  )
}

export default AddNewWorkOutPage;