import React from 'react';

const CartItem = ({cartItem,handleDeleteItem}) => {
    console.log(cartItem)
    return (
        <div className='flex items-center'>

            <img className='w-10' src={cartItem?.image} alt=''></img>

            <h1>{cartItem?.itemName}</h1>
            
                <p className='mx-2 font-extrabold text-2xl'>-</p>

                
                <input type="number"
                                
                                className="input input-bordered input-success  max-w-xs" />
                <h1 className='mx-2 font-extrabold text-2xl'>+</h1>
          

           <h1 onClick={()=>handleDeleteItem(cartItem)} className='mx-2 text-red-500 font-semibold'>X</h1>
            
            
        </div>
    );
};

export default CartItem;