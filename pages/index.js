import tw from 'tailwind-styled-components'
import Head from 'next/head'
import Login from './Login'

export default function Home() {
    return ( 
    <Wrapper>
        <Head>
            <title>Uber Clone</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Login />
    </Wrapper>
    )
}

const Wrapper = tw.div`
flex flex-col h-screen`