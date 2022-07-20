import React from 'react';

const Item = ({item,handleAddToCart}) => {


    // console.log(item)

    const {_id:id,itemName,unitPrice,vat}=item

    return (
        <div onClick={()=>handleAddToCart(item)} class="card w-full bg-base-100 shadow-xl">
  <figure class="p-2">
    <img src={item?.image} alt="Shoes" class="rounded-xl w-20" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">{itemName}</h2>
    <p>Unit Price :{unitPrice} </p>
    <p>VAT :{vat} % </p>
    
  </div>
</div>
    );
};

export default Item;