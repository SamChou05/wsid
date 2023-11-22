"use client"

import { PlusIcon } from '@heroicons/react/20/solid'
import { create } from 'domain'
import { addDoc, collection, getDocs } from 'firebase/firestore'
import { useRouter } from 'next/navigation'
import { useSession, useUser, useAuth } from '@clerk/nextjs'
import { useState } from 'react'
import React from 'react'
import { db } from '@/firebase'
import { getAuth, signInWithCustomToken } from 'firebase/auth'


const NewChat = () => {
    const router = useRouter();
    const { session } = useSession();
    const user = useUser()
    const {getToken} = useAuth();

    const createNewChat = async() => {
        const token = await getToken({template: "integration_firebase"})
        const auth = getAuth();
        const userCredentials = await signInWithCustomToken(auth, token)
    }

  return (
    <div onClick={createNewChat} className=' border-gray-700 border chatRow'>
        <PlusIcon className='h-4 w-4 '/>
        <p>
            New Chat
        </p>
    </div>
  )
}

export default NewChat