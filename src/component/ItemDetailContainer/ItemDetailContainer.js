
import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';

const film = { id: 1, image: "https://cdn.pixabay.com/photo/2022/08/13/09/05/lion-7383228_960_720.jpg", title: "Leon" };

export const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() =>{
                resolve(film);
            }, 3000);
        });
        
        getData.then(res => setData(res));
    }, [])



    return (
        <ItemDetail data={data} />
    );
}
    



export default ItemDetailContainer;