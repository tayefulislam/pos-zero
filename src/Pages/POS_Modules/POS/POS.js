import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import './POS.css';
import Item from '../Item/Item';
import { toast } from 'react-toastify';

const POS = () => {


    const url =`http://localhost:9000/items`
    const { isLoading, error, data } = useQuery(['items'], () =>
    fetch(url).then(res =>
      res.json()
    )
  )

//   console.log(data)



const [carts,setCart]=useState([])


//handle to addtocart



const handleAddToCart=(item)=>{

    const itemCheck=carts.find(cart =>cart._id === item._id)
if(!itemCheck){
    carts.push(item)
    console.log(carts)
}

else{
    toast.error("Item Already In Cart")
}
   


}





    return (
        <div>

            <div className='pos-container'>

                <div className='grid grid-cols-4 gap-1'>

                    {
                        data?.map(item =><Item
                        key={item._id}
                        item={item}
                        handleAddToCart={handleAddToCart}
                        ></Item>)
                    }



                </div>

                <div className='cart-container'>
                    


                </div>



            </div>


            
        </div>
    );
};

export default POS;