import React, { useEffect, useState } from 'react';
import { totalPrice } from '../../Utilities/fakedb';
import Cosmat from '../Cosmat/Cosmat';



const Cosmetic = () => {
    // const cosmate = [
    //     { id: 1, name: 'Alta', price: 100 },
    //     { id: 2, name: 'curi', price: 200 },
    //     { id: 3, name: 'iris', price: 300 },
    //     { id: 4, name: 'naipalis', price: 600 },
    //     { id: 5, name: 'fita', price: 500 },
    // ]
    const [cosmate, setCosmate] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCosmate(data))
    }, []);
    const total = totalPrice(cosmate)
    return (
        <>
            <div className="grid ">
                <div className='col'>
                    <h2 className='text-xl font-semibold text-center'>Cosmetic Products Here!</h2>
                    <h2 className='text-xl font-semibold text-center'>Your Total Price: {total}</h2>
                    {
                        cosmate.map(cos => <Cosmat
                            key={cos.id}
                            cos={cos}
                        ></Cosmat>)
                    }
                </div>
            </div>
        </>
    );
};

export default Cosmetic;