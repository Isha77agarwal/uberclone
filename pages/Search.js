import React from 'react'
import tw from 'tailwind-styled-components'
import Link from 'next/link'

const Search = () => {
    const [pickUpLocation, setPickUpLocation] = React.useState()
    const [dropOffLocation, setDropOffLocation] = React.useState()
    return (
        <Wrapper>
            <BackButtonContainer>
                <Link href="/" passHref>
                    <BackButton src ="https://img.icons8.com/ios-filled/50/000000/left.png"/>
                </Link>
                
            </BackButtonContainer>
            <InputContainer>
                <StartDropIcon>
                    <Circle src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png"/>
                    <Line src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png"/>
                    <Square src=" https://img.icons8.com/windows/50/000000/square-full.png"/>
                </StartDropIcon>
                <InputBoxes>
                    <Input placeholder="Enter Pickup Location" value = {pickUpLocation} onChange = {(event) => setPickUpLocation(event.target.value)}/>
                    <Input placeholder="Where to" value ={dropOffLocation} onChange = {(event) => setDropOffLocation(event.target.value)}/>
                </InputBoxes>
                <PlusIcon src="https://img.icons8.com/ios/50/000000/plus-math.png"/>
            </InputContainer>
            <SavedPlaces>
                <StarIcon src="https://img.icons8.com/ios-filled/50/ffffff/star--v1.png"/>
                <Text>
                    Saved Places
                </Text>
            </SavedPlaces>
            <Link href={{
                pathname: "./Confirm",
                query: {
                    pickUp : pickUpLocation,
                    dropOff: dropOffLocation
                }}} passHref>
                <ConfirmLocation>
                    Confirm Location
                </ConfirmLocation>
            </Link>
        </Wrapper>
    )
}

export default Search

const Wrapper = tw.div`
 bg-gray-200 h-screen flex flex-col
`
const BackButtonContainer = tw.div`
bg-white`

const BackButton = tw.img`
 h-10 w-10 cursor-pointer`

const InputContainer = tw.div`
 bg-white flex items-center py-2`

const StartDropIcon = tw.div`
 flex flex-col items-center
`

const Circle = tw.img`
h-2.5
`
const Line = tw.img`
h-10`

const Square = tw.img`
h-2.5`

const InputBoxes = tw.div`
flex flex-col flex-1`

const Input = tw.input`
bg-gray-200 my-1 h-10 px-2 border-none rounded-lg outline-none`

const PlusIcon = tw.img`
bg-gray-200 rounded-full mx-3 h-10 w-10`

const SavedPlaces = tw.div`
flex bg-white mt-2 items-center`

const Text = tw.div`
text-lg pl-3`

const StarIcon= tw.img`
bg-gray-200 rounded-full h-10 w-10 m-1 p-2`

const ConfirmLocation = tw.button`
bg-black text-white h-10 mx-4 my-2 text-lg`