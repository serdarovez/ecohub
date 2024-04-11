import React from 'react'

function SingleNewsletter() {
    return (
        <div className='bg-[#FAFAFA] cursor-pointer font-semibold p-4 relative w-full aspect-video'>
            <div className="flex items-center gap-4">
                <span className='text-sm text-goldColor xl:text-lg'>10.02.2024</span>
                <div className="flex w-full items-center gap-2">
                    <hr className='w-full border-[1px] border-goldColor' />
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <rect x="5.22791" width="6.70713" height="6.70713" transform="rotate(45 5.22791 0)" fill="#D3AA65" />
                    </svg>
                </div>
            </div>
            <div className='absolute bottom-4 left-4 right-4'>
                <span className='text-sm text-goldColor xl:text-lg'>Ady Familýasy</span>
                <div className='text-darkColor xl:text-xl line-clamp-2 w-full'>Türkmenistan sanly ulgamyň mümkinçiliklerine daýanýar</div>
            </div>

        </div>
    )
}

export default SingleNewsletter