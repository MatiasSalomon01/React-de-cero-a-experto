import { useContext } from "react"
import { UserContext } from "../UserContext";

const LoginPage = () => {

  const {user, setUser} = useContext(UserContext);
  return (
    <>
        <h1>LoginPage</h1>
        <hr />

        <pre>
          {JSON.stringify(user, null, 3)}
        </pre>

        <button className="btn btn-primary" onClick={() => setUser({id: 1, name: 'Juan', email:'asdsa@ddd.com'})}>
          Establecer usuario
        </button>
    </>
  )
}

export default LoginPage