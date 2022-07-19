import React from 'react';

const AddItem = () => {




    const handleSubmit =(event)=>{

        event.preventDeafult()

    }


    return (
        <div className='flex justify-center items-center h-screen'>

            <div className='card w-96  shadow-xl'>

                <div className='card-body'>
                    <form onSubmit={handleSubmit} >



                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Item Name</span>
                            </label>

                            <input type="text"
                                placeholder="Item Name"
                                name='itemname'
                                required
                                className="input input-bordered input-success  w-full max-w-xs" />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>

                            <input type="text"
                                placeholder="Image"
                                name='image'
                                required

                                className="input input-bordered input-success  w-full max-w-xs" />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>

                            <textarea type="text"
                                placeholder="Item Details"
                                name='details'
                                className="input input-bordered input-success  w-full max-w-xs" />

                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">VAT (%)</span>
                            </label>

                            <input type="number"
                                placeholder="VAT in %"
                                name='vat'
                                required
                                className="input input-bordered input-success  w-full max-w-xs" />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>

                            <input type="number"
                                placeholder="Available Quantity"
                                name='quantity'
                                required
                                className="input input-bordered input-success  w-full max-w-xs" />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Unit Price</span>
                            </label>

                            <input type="number"
                                placeholder="Price"
                                name='unitprice'
                                required

                                className="input input-bordered input-success  w-full max-w-xs" />

                        </div>

                        <input type="submit" className='btn mt-2 w-full max-w-xs bg-green-500 hover:bg-red-600' value='Add Item' />


                    </form>
                </div>
            </div>


        </div>
    );
};

export default AddItem;