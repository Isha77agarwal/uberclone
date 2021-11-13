import tw from 'tailwind-styled-components'
import Map from './components/Map'
import Start from './Start'
import Login from './Login'

export default function Home() {
    return ( 
    <Wrapper>
        {/* <Map />
        <Start /> */}
        <Login />
    </Wrapper>
    )
}

const Wrapper = tw.div`
flex flex-col h-screen`