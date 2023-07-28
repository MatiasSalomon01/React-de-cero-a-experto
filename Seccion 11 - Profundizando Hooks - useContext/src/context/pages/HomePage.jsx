import { useContext } from "react";
import { UserContext } from "../UserContext";

const HomePage = () => {
  const {user} = useContext(UserContext);

  return (
    <>
        <h1>HomePage <small>{user?.name}</small></h1>
        <hr />
        <pre>
          {JSON.stringify(user, null, 3)}
        </pre>
    </>
  )
}

export default HomePage