"use client"
import { useSession } from '@clerk/nextjs'
import React, { ServerContextJSONArray, ServerContextJSONValue, useContext, useEffect, useState } from 'react'
import CategoryList from '../components/CategoryList'
import RangeSelect from '../components/RangeSelect'
import SelectRating from '../components/SelectRating'
import GoogleMapView from '../components/GoogleMapView'
import GlobalApi  from '@/Shared/GlobalApi'
import { UserLocationContext } from '../context/UserLocationContext'

const OutsideMaps = () => {

    const [category,setCategory]=useState();
    const [radius,setRadius]=useState(2500);
    const [businessList,setBuisnessList] = useState([])
    const [userLocation,setUserLocation]=useContext(UserLocationContext) as ServerContextJSONArray;

    
    useEffect(()=> {
        getGooglePlace
    },[category,radius])
    
    

    const getGooglePlace=()=> {
        GlobalApi.getGooglePlace(category,radius,userLocation.lat,userLocation.lng).then(resp=>{
            console.log(resp.data.product.result);
            setBuisnessList(resp.data.product.result)
        })
    }   

    return (
        <div className='pt-3'>
            <div className=' bg-gray-100 p-[6px] rounded-md w-[20%] gap-3 items-center hidden md:flex' >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                <input type='text' placeholder = 'Search'  className=' bg-transparent outline-none w-[40%]' />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4'>
                <div className='h-screen'>
                    <div className='p-3'>
                        <CategoryList onCategoryChange={(value:any)=>setCategory(value)}/>
                        <RangeSelect onRadiusChange={(value:any)=>setRadius(value)}/>
                        <SelectRating/>
                    </div>
                </div> 
                <div className='col-span-3 h-screen'>
                    <GoogleMapView/>
                </div>
            </div>
        </div>

    )
}

export default OutsideMaps