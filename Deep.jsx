import { useContext } from 'react'
import { AuthContext } from './AuthContextProvider'

const Deep = () => {
    const nekakavTekst = useContext (AuthContext)
  return (
    <>
<div>Deep</div>
<p>Value of context is: {nekakavTekst}</p>
    </>
    
  )
}

export default Deep