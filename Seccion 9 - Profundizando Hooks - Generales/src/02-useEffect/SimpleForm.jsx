import { useEffect, useState } from "react"

const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'matias@gmail.com'
    })

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        
        setFormState({ 
            ...formState,
           [name]: value
         });
    }

    useEffect(() => {
        console.log('useEffect called');
    });
    

    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />
            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={ username }
                onChange={ onInputChange }
            />
            <input
                type="text"
                className="form-control mt-2"
                placeholder="matias@gmail.com"
                name="email"
                value={ email }
                onChange={ onInputChange }
            />
        </>
    )
}

export default SimpleForm