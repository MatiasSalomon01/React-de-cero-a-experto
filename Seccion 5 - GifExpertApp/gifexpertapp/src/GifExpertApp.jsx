import { useState } from "react"

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Drangon Ball'])

    const onAddCategory = () => {
        setCategories([ ...categories, 'Valorant' ]);
    }

    return (
        <>
            { /* Titulo */ }

            <h1>GifExpertApp</h1>

            { /* Input */ }

            { /* Lista de Gif's */ }
            <button onClick={ onAddCategory } >Agregar</button>
            <ol>
                { 
                    categories.map( category => {
                        return <li key={ category }>{ category }</li>
                    })
                }
            </ol>
        </>
  )
}
