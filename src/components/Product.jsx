import React from 'react'
import imager from '../images/news.png'

function Product() {
    return (
        <div className='rounded-none cursor-pointer h-auto overflow-hidden'>
            <div className="image aspect-video transition duration-150 ease-in-out hover:scale-300 overflow-hidden">
                <img src={imager} className='object-cover  w-full  ' alt="Product" />
            </div>
            <div className="flex bg-white text-darkColor line-clamp-2 w-[90%] font-bold pt-3 flex-col">
                <div>Bilim ulgamynyň kanunçylyk binýady – ýaş nesliň üstünlikli ösmeginiň girewi</div>
            </div>
            <div className='text-goldColor mt-5 font-semibold'>
            10.02.2024
            </div>
            
        </div>
    )
}

export default Product