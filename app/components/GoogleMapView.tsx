"use client"
import { useContext, useEffect, useState } from 'react';
import React from 'react'
import { GoogleMap, LoadScript, Marker, MarkerF } from '@react-google-maps/api';
import { UserLocationContext } from '../context/UserLocationContext';
import axios from 'axios';
import { currentUser } from '@clerk/nextjs';


const GoogleMapView = () => {
    const mapContainerStyle= {
        width:'100%',
        height:'70vh'
    }

    const [latitude, setLatitude] = useState<number | null>(null);
    const [longitude, setLongitude] = useState<number | null>(null);


    useEffect(()=> {
        getUserLocation()
    }, [])
    const getUserLocation = () => {
        navigator.geolocation.getCurrentPosition((pos) => {
            setLatitude(pos.coords.latitude),
            setLongitude(pos.coords.longitude)

        },
        error => {
            console.error("Error fetching geolcoation:", error)
        })

    }
    console.log("current lat", latitude)
    console.log("current long", longitude)
    
    if (latitude === null || longitude === null) {
        return <div>Loading...</div>;
    }
    
  return (
    <div>
        <LoadScript 
            googleMapsApiKey='AIzaSyBJjlKm9vVmcSRjVPOjKCQrH7z851hambE'
        >
            <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={{lat: latitude, lng:longitude}}
            
            zoom={13}
            >
                <MarkerF
                position={{lat: latitude, lng:longitude}}/>
            
            </GoogleMap>
        </LoadScript>
        <h1>
            lat {latitude}
            long {longitude}
        </h1>

    </div>
  )
}

export default GoogleMapView 