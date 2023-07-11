import { useState } from "react"
import { AddCategory } from "./components/AddCategory"

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
            <AddCategory/>
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
