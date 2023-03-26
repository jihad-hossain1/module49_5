import React from 'react';
import { addToDb, removeFromDb } from '../../Utilities/fakedb';

const Cosmat = (props) => {
    const addToCart = (id) => {
        // console.log('item added', id);
        addToDb(id);
    }
    // const addToCartWithParameter = () => addToCart(id);

    const removeFromCart = id => {
        // console.log('removing', id);
        removeFromDb(id);

    }
    // console.log(props.cos);
    const { id, name, price } = props.cos;

    return (
        <>
            <div>
                <div className="p-7 bg-blue-300 m-4 rounded-lg">
                    <h3 className='text-purple-700'>Buy this: {name} </h3>
                    <p>Price: ${price}</p>
                    <p>Id: {id}</p>
                    <button onClick={() => addToCart(id)} className='btn bg-blue-500 py-2 px-3 rounded-md text-white my-2'>add to Cart</button>
                    <button
                        onClick={() => removeFromCart(id)}
                        className='btn bg-blue-500 py-2 px-3 mx-1 rounded-md text-white my-2'
                    >remove</button>
                </div>
            </div>
        </>
    );
};

export default Cosmat;