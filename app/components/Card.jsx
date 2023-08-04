import Image from 'next/image'
import React from 'react'
import cardImg from '../assets/cardImg.jpg'
import Link from 'next/link'
const Card = ({id,contestName,contestInformation}) => {
  return (
    <div>
        <Link href={`${id}`}>
      <Image
        className='width-full rounded-lg'
        src={cardImg}
        width={1000}
        height={1000}
        alt={contestName}  
        priority
      />
      </Link>
      <h1 className='text-xl bold'>{contestName}</h1>
      <p>{contestInformation}</p>
    </div>
  )
}

export default Card
