import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import baseUrl from '../baseUrl';
import { useTranslation } from 'react-i18next';
import axiosInstance from '../axios';


function Footer() {
    const { t, i18n } = useTranslation();
    const [cats, setCats] = useState(null)
    const [email, setEmail] = useState(null)

    const location = useLocation()

    // const baseUrl = `http://216.250.11.159:8080/`
    const getCats = async () => {
        try {
            // isLoading(true)
            const response = await axiosInstance.get(`${baseUrl}api/category/`);

            // console.log('news response', response.data[0]);
            setCats(response?.data?.data)
            // isLoading(false)

        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    }

    const [isValid, setIsValid] = useState(true);

    const isValidEmail = (email) => {
        // Basic email validation regex
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        setIsValid(isValidEmail(value));
    };

    const Subscribe = async () => {
        try {
            if (!email) {
                return
            }
            const response = await axiosInstance.post(`${baseUrl}api/subscribe/`, {
                email: email
            });
            if(response?.data?.success){
                setEmail(null)
            }
            console.log(response.data.success, 'subscribe')
        } catch (error) {

        }
    }
    useEffect(() => {
        getCats()
    }, [i18n.language])
    return (
        <div className=' bg-primaryColor '>
            <div className="container text-white py-10">
                <div className="flex">
                    <div className="w-1/2 flex ">
                        <ul className='grid grid-rows-4 w-1/2   grid-flow-col items-left  font-[500]'>
                            {
                                cats?.map((cat) => {
                                    if (cat?.children?.length > 0) {
                                        if (cat?.type === 'oportunities') {
                                            return (
                                                <NavLink to={`/yaslar`} className={` ${location.pathname === `/yaslar` && 'opacity-[50%]'} cursor-pointer flex items-center flex items-center hover:opacity-[50%] p-1  font-[500] text-[16px] text-nowrap xl:text-xl`} key={cat.id} value={cat?.label}  >
                                                    <div>
                                                        {cat?.label}
                                                    </div>

                                                </NavLink>
                                            )
                                        } else {

                                            return (
                                                <li className={` ${location.pathname === `/news` && cat?.type === 'news' && 'opacity-[50%]'} cursor-pointer flex items-center hover:opacity-[50%] p-1   xl:text-xl font-[500] text-[16px] text-nowrap`} key={cat.id} value={cat?.label}  >
                                                    <div>
                                                        {cat?.label}
                                                    </div>

                                                </li>
                                            )
                                        }
                                    } else {
                                        if (cat?.type === 'newsletter') {
                                            return (
                                                <NavLink to={`/newsletter`} className={` ${location.pathname === `/newsletter` && 'opacity-[50%]'} cursor-pointer flex items-center font-[500] hover:opacity-[50%] p-1  text-nowrap xl:text-xl`} key={cat.id} value={cat?.label}  >
                                                    <div>
                                                        {cat?.label}
                                                    </div>

                                                </NavLink>
                                            )
                                        }
                                        else if (cat?.posts_count > 0) {
                                            return (
                                                <NavLink to={cat?.posts_count > 0 && `/topics/${cat?.id}`} className={` cursor-pointer flex items-center  font-[500] max-h-max hover:opacity-[50%] p-1  text-nowrap xl:text-xl`} key={cat.id} value={cat?.label}  >
                                                    {cat?.label}

                                                </NavLink>
                                            )
                                        }

                                    }


                                })

                            }
                            <NavLink to={`/library`} className={` cursor-pointer flex items-center  font-[500] max-h-max hover:opacity-[50%] p-1  text-nowrap xl:text-xl`}   >
                                {t('library')}
                            </NavLink>
                        </ul>
                        {/* <ul className='flex w-1/2 flex-col gap-3 items-left  font-[500]'>
                            <NavLink to={`/library`} className='cursor-pointer text-left'>
                                Kitaphana
                            </NavLink>

                            <li className='cursor-pointer text-left'>
                                Sanly Ulgam
                            </li>
                            <NavLink to={`topics/1`} className='cursor-pointer text-left'>
                                Biz Barada
                            </NavLink >
                        </ul> */}
                    </div>
                    <div className="w-1/2">
                        <div className="flex items-center justify-between ">
                            <div className=" flex flex-col gap-3">
                                <span className='text-[#FFFFFF]  opacity-50 text-xs'>Habarlaşmak Üçin</span>
                                <div className='text-lg'>
                                    +993 (63) 060606
                                </div>
                            </div>
                            <div className=" flex flex-col text-right gap-3">
                                <div className='text-left'>

                                    <span className='text-[#FFFFFF]  opacity-50 text-xs'>Elektron Poçta</span>
                                    <div className='text-lg'>
                                        youth@tm.com
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='text-left flex flex-col gap-2 w-2/3 mt-20'>
                            <span className='text-[#FFFFFF]  opacity-50 text-xs'>Bildirişlerden Habardar Bol</span>
                            <div className='flex justify-between bg-white items-center'>
                                <span className='text-[#C5C5C5] p-3 text-xs font-[500]'>Email</span>
                                <input
                                    value={email}
                                    onChange={handleEmailChange}
                                    className={`w-2/3 h-full outline-none grow text-xs ${isValid ? 'text-darkColor' : 'text-red-500'}`}
                                    type="email"
                                    placeholder="Enter your email"
                                />
                                <span
                                    onClick={Subscribe}
                                    className={`text-primaryColor p-3 text-xs cursor-pointer font-[500] ${isValid ? '' : 'cursor-not-allowed'}`}>
                                    {t('join')}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className='w-full border-[1px] my-10 border-white' />
                <div className="flex text-sm">
                    <div className="w-1/2">
                        <div>Türkmenistanyň Ýaşlar Syýasaty</div>
                    </div>
                    <div className="w-1/2 flex items-center justify-between">
                        <div className='flex items-center gap-1 cursor-pointer'>
                            <a href='https://education.gov.tm/media/AboutFiles/yaslar-barada-dowlet-syyasaty-hakynda_b8zDcZL.pdf'>Türkmenistanyň Ýaşlar Baradaky Kanuny</a>
                            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none">
                                <path d="M1 1H8M8 1L1 8M8 1V8" stroke="white" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div>© 2024 {t('rights')}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer