import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../store/slices/CartSlice'

const Product = ({ product }) => {
    const dispatch = useDispatch()
    const { cart } = useSelector(state => state)
    // Function to handle adding the product to the cart
    const handleAddToCart = () => {
        dispatch(addToCart(product)) // Pass only the product data, not the event object
    }
    const handleRemoveCart = ()=>{
        dispatch(removeFromCart(product?.id)) // Pass only the product data, not the event object)
    }

    return (
        <div key={product?.id} className='flex flex-col items-center p-4 gap-3 bg-white rounded-xl shadow-lg'>
            <div className='h-48 w-full'>
                <img className='w-full h-full object-cover rounded-t-xl' src={product?.image} alt={product.title} />
            </div>
            <h2 className='text-xl font-bold text-center'>{product?.title}</h2>
            <h2 className='text-lg font-bold text-center'>{product?.price}</h2>
            {/* <p className='text-gray-600 text-center truncate'>{product?.description}</p> */}
            <div className='flex justify-center'>
                <button className='bg-blue-800 text-white rounded-md px-4 py-2' onClick={cart.some((item) => item.id === product?.id) ? handleRemoveCart : handleAddToCart}>
                    {
                        cart.some((item) => item.id === product?.id) ? "Remove from cart" : "Add to Cart"
                    }
                </button>
            </div>
        </div>
    )
}

export default Product
