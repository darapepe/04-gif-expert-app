import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([...categories, newCategory]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            {/* <input type="text" /> */}
            <AddCategory
                // setCategories={setCategories}
                //cuando inicia con la palabra on es porque esta emitiendo algo 
                onNewCategory={(value) => onAddCategory(value)}
            />


            {
                categories.map((category) => (
                    <GifGrid key={category} category={category} />
                ))
            }

        </>
    )
}
