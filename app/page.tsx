import Image from 'next/image'
import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import { TypeAnimation } from "react-type-animation";
import Link from 'next/link';

//test 

export default function Home() {


  return (
    <div className=" bg-gray w-full h-[1024px] overflow-hidden text-left text-5xl text-black font-raleway">
      <Link href = 'first-choice' className='p-0 bg-[transparent] absolute top-[594px] left-[631px] text-[33px] font-raleway text-black text-left inline-block w-[179px] h-[38px]'>
        get started
      </Link>
    </div>
  )
}
