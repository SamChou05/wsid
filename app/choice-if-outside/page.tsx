import React from 'react'
import Link from 'next/link';


const OutsidePage = () => {
  const dataToSend = 'Hello from Page A';
  return (
    <div className="relative bg-white w-full h-[1024px] overflow-hidden text-left text-xl text-black font-raleway">

      <Link className='absolute top-[489px] left-[193px]'
        href={{
          pathname: '/google-maps',
        }}
      >
        Go to Gym
      </Link>

      <b className="absolute top-[493px] left-[1091px]">Listen to a Podcast</b>
      <b className="absolute top-[490px] left-[660px]">Read a book</b>

      <b className="absolute top-[774px] left-[219px]">Watch TV</b>

      <b className="absolute top-[778px] left-[1123px]">Cook A Meal</b>
      <b className="absolute top-[778px] left-[calc(50%_-_58px)]">
        Play a game
      </b>

      <b className="absolute top-[824px] left-[calc(50%_-_189px)] text-13xl">
        Click an icon to continue
      </b>
    </div>
  )
}

export default OutsidePage