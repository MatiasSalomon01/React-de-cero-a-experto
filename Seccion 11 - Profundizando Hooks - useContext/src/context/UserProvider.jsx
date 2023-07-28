
import { UserContext } from "./UserContext"

const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{hola:'Hola'}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider