import React from 'react'
import Map from './components/Map'
import tw from 'tailwind-styled-components'
import mapboxgl from 'mapbox-gl'
import { useRouter } from "next/router";
import RideSelector from './components/RideSelector';
import Link from 'next/link'

const Confirm = () => {
    const { query } = useRouter()

    const [pickUpCoordinates, setPickUpCoordinates] = React.useState([0,0])
    const [dropOffCoordinates, setDropOffCoordinates] = React.useState([0,0])
        
   React.useEffect(() => {
        pickUpCoordinate(query.pickUp)
        dropOffCoordinate(query.dropOff)
    }, [query.pickUp, query.dropOff]) 

    const pickUpCoordinate = (place) => {
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?limit=1&access_token=${mapboxgl.accessToken}`)
        .then(response => response.json())
        .then(data => {
            setPickUpCoordinates(data.features[0].center)
        })
    }

    const dropOffCoordinate = (place) => {
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?limit=1&access_token=${mapboxgl.accessToken}`)
        .then(response => response.json())
        .then(data => {
            setDropOffCoordinates(data.features[0].center)
        })
    }

    return (
        <Wrapper>
            <BackButtonContainer>
                <Link href="/Search" passHref>
                    <BackButton src ="https://img.icons8.com/ios-filled/50/000000/left.png"/>
                </Link>  
            </BackButtonContainer>
            <Map pickUp = {pickUpCoordinates} dropOff = {dropOffCoordinates}/>
            <ConfirmRideWrapper>
                <RideSelector from = {pickUpCoordinates} to = {dropOffCoordinates}/>
                <ConfirmButton>
                    Confirm Ride
                </ConfirmButton>
            </ConfirmRideWrapper>
        </Wrapper>
    )
}

export default Confirm

const Wrapper = tw.div`
flex flex-col h-screen`

const ConfirmRideWrapper = tw.div`
flex-1 flex flex-col h-1/2`

const ConfirmButton = tw.button`
bg-black text-white py-2 m-3 text-lg`

const BackButtonContainer = tw.div`
rounded-full m-2 bg-white h-11 w-11  z-10 absolute`

const BackButton = tw.img`
 h-9 w-9 cursor-pointer object-none object-left-top z-10`