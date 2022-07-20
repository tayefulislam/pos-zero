import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import './POS.css';
import Item from '../Item/Item';
import { toast } from 'react-toastify';
import CartItem from '../CART/CartItem/CartItem';


const POS = () => {


    const url =`http://localhost:9000/items`
    const { isLoading, error, data } = useQuery(['items'], () =>
    fetch(url).then(res =>
      res.json()
    )
  )

//   console.log(data)



const [carts,setCarts]=useState([])


//handle to addtocart



const handleAddToCart=(item)=>{

    const itemCheck=carts.find(cart =>cart._id === item._id)
if(!itemCheck){
    const newCart = [...carts, item];
                setCarts(newCart)
}

else{
    toast.error("Item Already In Cart")
}
   


}





    return (
        <div>

            <div className='pos-container'>

                <div className='grid grid-cols-2 lg:grid-cols-3 gap-1'>

                    {
                        data?.map(item =><Item
                        key={item._id}
                        item={item}
                        handleAddToCart={handleAddToCart}
                        ></Item>)
                    }



                </div>

                <div className='cart-container'>

                    <h1>Cart Details</h1>

                  {
                    carts?.map((cartItem,index)=><CartItem
                    key={index}
                    cartItem={cartItem}
                    
                    ></CartItem>)
                  }
                    


                </div>



            </div>


            
        </div>
    );
};

export default POS;