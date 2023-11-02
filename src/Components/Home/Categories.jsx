import React, { useState } from 'react'

import searchbar from '../../Assets/Search.png'

import { exerciseOptions, fetchData } from '../../Utils/fetchData'

function Categories() {

    const [search, setSearch] = useState('')

    const handleSearch = async() => {
        if(search) {
            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)
            console.log(exercisesData)
        }
    }


  return (
    <div className='container mx-auto flex justify-center items-center py-8 flex-col'>
      <p className='text-[32px] font-black'>START <span className='text-red-600'>TODAY</span></p>


      <div className='flex justify-center items-center gap-2 py-8'>
            <input onChange={(e) => setSearch(e.target.value)} className='py-2 px-4 rounded-3xl w-96 text-[18px]' type="text" placeholder='Search here...'/>
            <button onClick={handleSearch} className='border-2 p-2 rounded-3xl'><img className='w-8 invert ' src={searchbar } alt="srchimg" /></button>
        </div>

      <div className=''>
         
      </div>


    </div>
  )
}

export default Categories
