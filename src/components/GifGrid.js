import React from 'react';

import { useFetchGifs } from '../hooks/useFetchGifs';

import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
    
    const { data, loading } = useFetchGifs(category);
    //console.log(loading);
    return (
        <>
            <h3 className="animate__animated animate__jackInTheBox"> { category }</h3>
            {
                // loading ? 'Cargando...': 'Data cargada' (otra forma)
                loading && <p className= "animate__animated animate__bounce"> Loading </p>
               
            }
        {<div className= "card-grid">
        
                {
                    data.map ( img =>(
                        <GifGridItem 
                            key = { img.id }
                            {...img} /> // {...props} el spread, es para pasar las propiedades de las imagenes,
                     ))                 //sin pasar uno por uno y poder destructurar en el componente.
                }  
        </div>}
        </>
    )
}
