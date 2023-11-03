import React, { useState } from 'react'
import { Link, useLoaderData, useParams } from 'react-router-dom'
import { exerciseOptions, fetchData } from '../../Utils/fetchData'



function ExerciseSingle() {

    const {id} = useParams()
    const loader = useLoaderData()

  return (
    <div className='justify-center gap-44 items-start flex py-12'>
        
        <div className='flex flex-col justify-center items-center text-[20px] text-center gap-4 capitalized'>
            <p className='text-[24px] font-semibold'>Exercise name: {loader.name}</p>
             <img className='w-96 rounded-3xl' src={loader.gifUrl} alt="gif" />
             <p className='w-[300px] capitalized'>Equipment required for this exercise: <span className='text-red-500'>{loader.equipment}</span></p>
             <p>Target muscle: <span className='text-yellow-500'>{loader.target}</span></p>
             <p>Body Part: <span className='text-lime-500'>{loader.bodyPart}</span></p>
             <div>
             <p>SecondaryMuscles</p>
             {loader?.secondaryMuscles.map((el, index) => {
                return(
                    <p className='text-blue-500'>- {el}</p>
                )
             })}
            
             </div>
             
             <Link to='/' className='text-red-600 mt-14 border-2 px-5 py-2'>Go back</Link>
        </div>

        <div className='gap-4 flex flex-col border-2 p-5 text-[18px]'>
            <p>Instuctions:</p>
            {loader?.instructions?.map((el ,index) => {
                return (
                    <p key={index} className='w-[300px]'>{index + 1}. {el}</p>
                )
            })}
        </div>

    </div>
  )
}

export const singleExerciseLoader = async({params}) => {
    const {id } = params
    let data = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`, exerciseOptions)
    return data
}


export default ExerciseSingle
