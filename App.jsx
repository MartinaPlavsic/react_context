
import './App.css'

import  AuthContextProvider  from './AuthContextProvider'
import Deep from './Deep'
import SignInButton from './SignInButton'


function App() {
  
  return (
    <>
    <AuthContextProvider>
    <h1>react context</h1>
    <SignInButton />
    <Display/>
    <Deep/>
    </AuthContextProvider>
      
    </>
  )
}

export default App
