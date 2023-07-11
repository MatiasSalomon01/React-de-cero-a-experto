
export const FirstApp = (props) => {
    console.log(props);
    return (
        <>
            <h2>{props.title}</h2>
            <p>Soy un subtitulo</p>
        </>
    )
}

const funcion = () => "Nuevo texto"