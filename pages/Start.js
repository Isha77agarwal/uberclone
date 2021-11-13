import React from 'react'
import tw from 'tailwind-styled-components'
import { useRouter } from 'next/router'
import Map from './components/Map'

const Start = () => {
    const router = useRouter()
    const { name,image } = router.query
    const handleClick = (event) => {
        event.preventDefault()
        router.push("./Search")
    }
    return (
        <Wrapper>
            <Map />
            <Header>
                <Uberlogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg"/>
                <Profile>
                    <Name>{name}</Name>
                    <ProfileImage src={image}/>
                </Profile>
            </Header>
            <ActionButtons>
                <ActionButton onClick={handleClick}>
                    <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png"/>
                        Ride
                </ActionButton>
                <ActionButton>
                    <ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png"/>
                    Wheels
                </ActionButton>
                <ActionButton>
                    <ActionButtonImage src=" https://i.ibb.co/5RjchBg/uberschedule.png"/>
                    Reserve
                </ActionButton>
            </ActionButtons>
            <InputButton>Where to?</InputButton>
        </Wrapper>
    )
}

export default Start

const Wrapper = tw.div`
flex-1 flex flex-col h-screen`

const Header = tw.div`
flex justify-between items-center m-2
`
const Profile = tw.div`
flex items-center`

const Uberlogo = tw.img`
h-20 
`
const Name = tw.div`
text-sm w-20 mr-4`

const ProfileImage = tw.img`
rounded-full h-12 w-12 border border-gray-200 p-px`

const ActionButtons = tw.div`
flex mx-3
`
const ActionButton = tw.button`
bg-gray-200 h-32 m-1 flex-1 flex flex-col items-center text-lg justify-center rounded-lg hover:scale-105 transform
`

const ActionButtonImage = tw.img`
h-3/5
`

const InputButton = tw.div`
bg-gray-200 mt-2 mx-3 h-12 rounded-lg flex items-center text-lg p-3`