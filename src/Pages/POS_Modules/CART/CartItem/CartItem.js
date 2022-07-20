import React from 'react';

const CartItem = ({cartItem,handleDeleteItem,handleIncrease,handleDecrease}) => {
    console.log(cartItem)
    return (
        <div className='flex items-center'>

            <img className='w-10' src={cartItem?.image} alt=''></img>

            <h1>{cartItem?.itemName}</h1>
            
                <p onClick={()=>handleDecrease(cartItem)} className='mx-2 font-extrabold text-2xl'>-</p>

                
                
                <h1>{cartItem.quantity}</h1>
                <h1 onClick={()=>handleIncrease(cartItem)} className='mx-2 font-extrabold text-2xl'>+</h1>
          

           <h1 onClick={()=>handleDeleteItem(cartItem)} className='mx-2 text-red-500 font-semibold'>X</h1>
            
            
        </div>
    );
};

export default CartItem;