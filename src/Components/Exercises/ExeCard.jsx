import React from 'react'
import { Link } from 'react-router-dom'

function ExeCard({data}) {
  return (
    <Link to={`/exercises/${data.id}`}>
    <div className='flex flex-col justify-center items-center border-2 rounded-2'>
        <img src={data.gifUrl} alt="data" />
        <p className='capitalize'>{data.name}</p>
    </div>
    </Link>
  )
}

export default ExeCard
