import useForm from "../hooks/useForm";

const FormWithCustomHook = () => {
    const {
        onInputChange,
        onResetForm,
        username,
        email,
        password
    } = useForm(
        {
            username: '',
            email: '',
            password: ''
        }
    );

    return (
        <>
            <h1>Formulario con custom hook</h1>
            <hr />
            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="Username"
                value={username}
                onChange={onInputChange}
            />
            <input
                type="text"
                className="form-control mt-2"
                placeholder="matias@gmail.com"
                name="Email"
                value={email}
                onChange={onInputChange}
            />
            <input
                type="text"
                className="form-control mt-2"
                placeholder="Password"
                name="password"
                value={password}
                onChange={onInputChange}
            />
            <button
                className="btn btn-primary mt-3"
                onClick={ onResetForm }>
                Borrar
            </button>
        </>
    )
}

export default FormWithCustomHook