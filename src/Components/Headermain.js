import React from 'react'
import { FaHeart, FaSearch, FaShoppingBag, FaUser } from 'react-icons/fa'
// import { useDispatch, useSelector } from 'react-redux';
// import {  useNavigate } from 'react-router-dom';
// import { setSearchTerm } from '../redux/ProductSlice';


const Headermain = () => {


    // const [search, setSearch] = useState('');
    // const dispatch = useDispatch();
    // const navigate = useNavigate();


    // const handleSearch = (e) => {
    //     e.preventDefault();
    //     dispatch(setSearchTerm(search));
    //     navigate('/filter-data');
    // };

    return (
        <div className=' border-b border-gray-200 py-6'>
            <div className=' container sm:flex justify-between items-center'>
                <div className=' font-bold text-4xl text-center pb-4 sm:pb-0 text-blackish'>
                    My Store
                </div>
                <div className=' w-full sm:w-[300-px] md:w-[70%] relative'>
                    {/* <from onSubmit={handleSearch}> */}
                    <input
                        className=' border-gray-200 border p-2 px-4 rounded-lg w-full'
                        type='text'
                        placeholder='Enter any product name...'

                        // onChange={(e) => setSearch(e.target.value)} 
                        />
                    <FaSearch className=' absolute right-0 top-0 mr-3 mt-3
                     text-gray-400  ' size={20} />
                     {/* </from> */}
                </div>
                <div className=' hidden lg:flex gap-4 text-gray-500 text-[30px]'>
                    <FaUser />
                    <div className=' relative'>
                        <FaHeart />
                        <div className=' bg-red-600 rounded-full absolute top-0 right-0 w-[18px] text-[12px]
                        text-white grid place-items-center translate-x-1 -translate-y-1 '>
                            0
                        </div>

                    </div>
                    <div className=' relative'>
                        <FaShoppingBag />
                        <div className=' bg-red-600 rounded-full absolute top-0 right-0 w-[18px] text-[12px]
                        text-white grid place-items-center translate-x-1 -translate-y-1 '>
                            0
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}
export default Headermain;
