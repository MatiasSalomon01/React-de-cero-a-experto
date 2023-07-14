
const ShowIncrement = ({ increment }) => {
    console.log('lol');
    return (
        <button
            className="btn btn-primary"
            onClick={() => {
                increment();
            }}>
            Incrementar
        </button>
    )
}

export default ShowIncrement