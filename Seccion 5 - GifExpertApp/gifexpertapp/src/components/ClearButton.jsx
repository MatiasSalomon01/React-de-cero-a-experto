
export const ClearButton = ({ clear }) => {

    
    return (
        <div className="button" onClick={ () => {
            clear();
        }}>
            <a href="#">Limpiar</a>
        </div>
    )
}