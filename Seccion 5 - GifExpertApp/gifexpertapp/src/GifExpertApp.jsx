import { useState } from "react"

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Drangon Ball'])
    return (
        <>
            { /* Titulo */ }

            <h1>GifExpertApp</h1>

            { /* Input */ }

            { /* Lista de Gif's */ }
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
