import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

    const [categories, setCategories] = useState(['Dragon Ball']);

   // const handleAdd = () => {
   //     setCategories([...categories, 'HunterXHunter']);
        //si lo quiero al inicio
        //setCategories(['HunterXHunter', ...categories]);
   // }

    return ( 
        <>
            <h2> GifExpertApp </h2> 
            <AddCategory setCategories = { setCategories } />
            <hr/>

            <ol>
                {
                    categories.map( category =>  (
                        <GifGrid 
                            key = {category}
                            category = {category} 
                        />
                    )
                    )
                }
            </ol>
        </>
    );

}

