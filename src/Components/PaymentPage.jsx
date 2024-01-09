import React from 'react'
import {RxQuestionMarkCircled} from 'react-icons/rx'
import {FiSearch} from 'react-icons/fi'
import {RiMessage2Fill} from 'react-icons/ri';
import {IoCaretDownOutline} from 'react-icons/io5';
import {FaChevronDown} from 'react-icons/fa6'
import InfoCards from './Cards/InfoCards';
import PaymentsHistoryDetails from './PaymentsHistoryDetails';

function PaymentPage() {
    return (
        <div className='my-3 '>
            <div>
                <div className='mx-10 mb-3 flex items-center justify-between'>
                    <div className='flex gap-4'>
                        <p className='text-base'>Payments</p>
                        <div className='flex items-center gap-2 text-sm text-gray-600 justify-center'>
                            <div><RxQuestionMarkCircled /></div>
                            <p>How it works</p>
                        </div>
                    </div>
                    <div className='flex text-gray-500'>
                        <div className='relative left-8 top-2'><FiSearch size={20}/></div>
                        <input type="text" placeholder='Search features, tutorials, etc.' className='pl-10 pr-5 py-2 bg-[#f2f2f2] w-96 outline-none rounded placeholder:text-gray-500'/>
                    </div>
                    <div className='flex gap-3 text-[#4c4c4c]'>
                        <div className='p-2 bg-[#e6e6e6] rounded-full'><RiMessage2Fill size={25}/></div>
                        <div className='p-2 bg-[#e6e6e6] rounded-full'><IoCaretDownOutline size={25}/></div>
                    </div>
                </div>
                {/* line */}
                <div className='h-[1px] w-full bg-slate-200'></div>
                {/* Overview */}
                <div className='mx-10'>
                    <div className='flex justify-between my-8'>
                        <div className='text-xl font-medium'>Overview</div>
                        <div className='flex items-center gap-2 text-gray-600'>
                            <button className='border-2 pl-3 pr-10 py-1 rounded text-base'>Last Month</button>
                            <div className='relative right-9'><FaChevronDown /></div>
                        </div>
                    </div>
                    <div className='flex gap-6'>
                        <InfoCards title={"Online orders"} numbers={231} />
                        <InfoCards title={"Amount received"} numbers={"₹23,92,312.19"} />
                    </div>
                </div>
                <div className='mx-10 mt-10'>
                <PaymentsHistoryDetails/>
                </div>
            </div>
        </div>
    );
}

export default PaymentPage;