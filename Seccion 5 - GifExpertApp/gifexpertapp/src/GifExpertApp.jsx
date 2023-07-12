import { useState } from "react"
import { AddCategory, GifGrid, ClearButton } from "./components"

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([])

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
    }

    const clearAll = () => {
       setCategories([]);
    }

    return (
        <>
            <div className="header-container">
                <h1>GifExpertApp</h1>
                <ClearButton clear={ clearAll }/>
            </div>
            <AddCategory
                onNewCategory={ onAddCategory }
            />
            {
                categories.map(category =>
                    <GifGrid
                        key={category}
                        category={category}
                    />
                )
            }

            
        </>
    )
}
