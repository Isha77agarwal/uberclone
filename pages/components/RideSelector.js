import React from 'react'
import tw from 'tailwind-styled-components'
import { carList } from '../data/carList'

const RideSelector = ({ from, to }) => {

    const [Rideduration, setRideDuration] = React.useState(0)
    
    React.useEffect(() => {
        fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${from[0]},${from[1]};${to[0]},${to[1]}?access_token=pk.eyJ1IjoiaXNoYTc3IiwiYSI6ImNrdm42MzNqeTBvN2gycXFmZ2Z2bDVjeG0ifQ.eEj5eHkUCFIKBwYv86gBsQ`).then(response => response.json())
        .then(data => {
            setRideDuration(data.routes[0].duration / 100)
        }
        )
    }, [from,to])

    return (
        <Wrapper>
            <TextWrapper>
                Choose a Ride or swipe up for more
            </TextWrapper>
            <CarContainer>
                {carList.map((car,index) => {
                return (<Car key={index}>
                        <UberContainer>
                            <UberImage src={car.imgUrl}/>
                            <UberInfo>
                                <Name>{car.service}</Name>
                                <Time>5 min away</Time>
                            </UberInfo>
                        </UberContainer>
                        <Amount>{'$' + (Rideduration * car.multiplier).toFixed(2)}</Amount>
                    </Car> )
                }) }
            </CarContainer>
        </Wrapper>
    )
}

const Wrapper = tw.div`
flex-1 flex flex-col h-1/2`

const TextWrapper = tw.div`
text-gray-500 text-sm justify-center items-center flex py-1 border-b border-gray-200`

const Car = tw.div`
flex-1 p-1 mx-2 items-center flex justify-between`

const UberImage = tw.img`
h-13 w-12`

const UberContainer = tw.div`
flex justify-start` 

const CarContainer = tw.div`
flex flex-col my-1 flex-1  overflow-y-scroll`

const Amount = tw.div`
text-black text-black-800 font-semibold`

const UberInfo = tw.div`
flex flex-col justify-center px-5`

const Name = tw.div`
font-semibold text-sm`

const Time = tw.div`
text-xs text-blue-400`

export default RideSelector
