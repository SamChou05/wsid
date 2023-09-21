import React from 'react'
import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Link from 'next/link';

const page = () => {


  return (
    <div className=" bg-gainsboro w-full h-[1024px] overflow-hidden text-left text-19xl text-black font-raleway">
        
      <b className="absolute top-[191px] left-[358px] text-13xl">
        Do you want to do something outside or inside?
      </b>
      <b className="absolute top-[746px] left-[calc(50%_-_190px)] text-13xl">
        Click an icon to continue
      </b>
      <Link href="choice-if-outside" className="absolute top-[673px] left-[314px] text-xl">
        Outside
      </Link>
      <Link href="choice-if-inside" className="absolute top-[669px] left-[1088px] text-xl">
        Inside
      </Link>
    </div>
  )
}

export default page