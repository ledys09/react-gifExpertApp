import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = ( category ) => {
    const [state, setstate] = useState({
        data: [],
        loading: true
    });
//2263-5711 rodrigo cantero
    useEffect ( () => {

        getGifs( category )
            .then( imgs => {

                    setstate({
                        data: imgs,
                        loading: false
                    });              
           
        })

    }, [category])

    return state; //{ data: [], loading: true}
}

        
    // //Ejecuta el componente (única vez) cuando éste es renderizado por primera vez. 
    // useEffect ( () => {
    //     getGifs(category)
    //     //si la función manda el mismo y único argumento 
    //     //puedo hacer esto .then(setImages);(se entiende que setImages puede ser cualquier función)
    //     //en vez de esto .then( data => setImages(data);)
    //         .then( setImages );
    // }, [ category ]) //agregando la dependencia en el useEffect (warning) solo ejecuta si la cat cambia
