import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../store/slices/CartSlice'
import Product from '../components/Product'

const Home = () => {

    const { data: products, isLoading, isError, error } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            try {
                const res = await axios.get(`https://fakestoreapi.com/products`)
                return res.data
            } catch (error) {
                throw new Error(error.message)
            }
        }
    })

    return (
        <div className='min-h-screen w-full'>
            <h1 className='text-5xl text-blue-900 font-semibold mt-10 mb-10 text-center'>Products</h1>
            <div className='flex justify-center'>
                {isLoading && <div>Loading...</div>}
                {isError && <div>Error: {error.message}</div>}
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-6xl mx-auto p-3'>
                    {products?.map((product) => (<Product key={product?.id} product={product}/>))}
                </div>
            </div>
        </div>
    )
}

export default Home
