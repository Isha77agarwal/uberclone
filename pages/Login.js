import React from 'react'
import tw from 'tailwind-styled-components'
import { auth,provider } from '../Firebase'
import { signInWithPopup } from 'firebase/auth'
import { useRouter } from 'next/router'

const Login = () => {
    const router = useRouter()

    const handleSignIn = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            console.log(user)
            router.push(
                {
                    pathname: '/Start',
                    query: { name: user.displayName, image: user.photoURL },
                  }
            )
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorMessage = error.message;
            alert(errorMessage)
  });
    }

    return (
        <Wrapper>
            <HeadingImage  src="https://i.ibb.co/n6LWQM4/Post.png" />
            <ImageLogin src="https://i.ibb.co/CsV9RYZ/login-image.png"/>
            <LoginButton onClick = {handleSignIn}>
                SignIn with Google
            </LoginButton>
        </Wrapper>
    )
}

export default Login

const Wrapper = tw.div`
h-screen flex flex-col bg-gray-300 p-4`

const HeadingImage = tw.img`
h-7 w-12`

const ImageLogin = tw.img`
`

const LoginButton = tw.button`
my-3 bg-black text-white text-lg py-3`