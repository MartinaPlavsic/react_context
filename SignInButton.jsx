import { useContext } from 'react'
import { AuthContext } from './AuthContextProvider'

function SignInButton() {
    const [signedIn, setSignedIn] = useContext(AuthContext)
  return (
    <>

    <div>Deeper {String(signedIn)}</div>
    <button onClick={()=> setSignedIn(prev => !prev)}>Change</button>
    </>
    
  )
}

export default SignInButton 