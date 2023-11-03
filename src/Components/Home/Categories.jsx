import React, { useEffect, useState } from 'react'

import searchbar from '../../Assets/Search.png'

import { exerciseOptions, fetchData } from '../../Utils/fetchData'
import teg from '../../Assets/teg.png'
import ExeCard from '../Exercises/ExeCard'
import muscle from '../../Assets/muscle.png'

function Categories() {

    const [search, setSearch] = useState('')
    const [exercises, setExercises] = useState([])

    const [bodyParts, setBodyParts] = useState([])

    const [target, setTarget] = useState([])

    const [toggle, setToggle] = useState(false)
  
    useEffect(() => {
      const fetchExercisesData = async() => {
        const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)
        setBodyParts(bodyPartsData)
      }

      fetchExercisesData()


      const targetListData = async() => {
        const targetData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/targetList', exerciseOptions)
        console.log(targetData)
        setTarget(targetData)
      }
      targetListData()

      const fetchDefaultData = async() => {
        let data = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)
        console.log(data)
        setExercises(data)
      }
      fetchDefaultData()

    }, [])
    

    const handleSearch = async() => {
        if(search) {
            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)
     
            const searchedExercises = exercisesData.filter((exercise) => exercise.name.toLowerCase().includes(search) 
            || exercise.equipment.toLowerCase().includes(search)
            || exercise.target.toLowerCase().includes(search)
            || exercise.bodyPart.toLowerCase().includes(search))
            setSearch('')
            setExercises(searchedExercises)
        }
    }

    const handleCategory = async(el) => {
      const categories = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${el}`, exerciseOptions)
      setExercises(categories)
    }

    const handleTarget = async (trg) => {
      const target = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/target/${trg}`, exerciseOptions)
      setExercises(target)
    }


  return (
    <div className='container mx-auto flex justify-center items-center py-8 flex-col'>
      <p className='text-[32px] font-black'>START <span className='text-red-600'>TODAY</span></p>


      <div className='flex justify-center items-center gap-2 py-8'>
            <input onChange={(e) => setSearch(e.target.value)} className='py-2 px-4 rounded-3xl w-96 text-[18px]' type="text" placeholder='Search here...'/>
            <button onClick={handleSearch} className='border-2 p-2 rounded-3xl'><img className='w-8 invert ' src={searchbar } alt="srchimg" /></button>
        </div>

      <div className=''>
         <div className='flex gap-4 justify-center items-center'>
          {bodyParts ? bodyParts?.map((el, index) => {
            return(
              <div onClick={() => handleCategory(el)} key={index} className='cursor-pointer flex flex-col justify-center items-center border-2 w-32 text-[18px]'>
                <img className='w-8 invert' src={teg} alt="teg" />
                <p>{el}</p>
              </div>
            )
          }) : console.log('not working')}
         </div>
      </div>

      <div  className='mt-4 flex flex-col justify-center items-center'>
        <p className='border-2 p-2 border-lime-500' onClick={() => setToggle(!toggle)}>More options</p>
        <div className={ ` ${toggle ? 'flex' : 'hidden'} mt-4  flex gap-4 justify-center items-center flex-wrap`}>
          {target?.map((target, index) => {
            return(
              <div onClick={() => handleTarget(target)} className='border-2 cursor-pointer p-4 w-44 text-center justify-center items-center flex flex-col'>
                  <img className='w-8 invert ' src={muscle} alt="" />
                  <p className='text-[16px] w-[300px]'>{target}</p>
              </div>
         
            )
          })}
        </div>
      </div>

      <div className='mt-12'>
          <div className='flex gap-4 flex-wrap items-center justify-center '>
            {exercises?.map((el, index) => {
              return(
                <ExeCard key={index} data={el}/>
              )
            })}
          </div>
      </div>


    </div>
  )
}

export default Categories
