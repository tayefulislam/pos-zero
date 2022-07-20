import React from 'react';
import { useQuery } from '@tanstack/react-query';
import './POS.css';

const POS = () => {


    const url =`http://localhost:9000/items`
    const { isLoading, error, data } = useQuery(['items'], () =>
    fetch(url).then(res =>
      res.json()
    )
  )

  console.log(data)

    return (
        <div>

            <div className='pos-container'>

                <div className='grid grid-cols-4'>

                    



                </div>

                <div className='cart-container'>
                    


                </div>



            </div>


            
        </div>
    );
};

export default POS;