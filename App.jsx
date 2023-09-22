
import './App.css'

import { AuthContextProvider } from '../AuthContextProvider'

import {Deep}

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
