import React from 'react'

function ExeCard({data}) {
  return (
    <div className='flex flex-col justify-center items-center border-2 rounded-2'>
       
        <img src={data.gifUrl} alt="data" />
        <p className='capitalize'>{data.name}</p>
    </div>
  )
}

export default ExeCard
