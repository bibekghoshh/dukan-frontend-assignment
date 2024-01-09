import React from "react";
import { BsArrowDownUp } from "react-icons/bs";
import { CiCircleInfo } from "react-icons/ci";
import { FaCaretDown, FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { PiDownloadSimple } from "react-icons/pi";
import { transactions } from './../Static/data';
import TransactionDetails from "./Cards/TransactionDetails";
import "../index.css"

const PaymentsHistoryDetails = () => {
  return (
    <div>
      <div className="mb-10">
        <p className="text-[20px] font-medium">Transactions | This Month</p>
      </div>
      <div className=" custom-shadow mb-10">
        <div className="flex justify-between items-center">
          <div className="flex text-gray-500">
            <div className='relative left-8 top-3'>
              <FiSearch size={18}/>
            </div>
            <input type="text" placeholder="Search by order ID..." className='pl-10 pr-5 py-2  outline-none border-2 rounded placeholder:text-gray-500'/>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <button className="border-2 pl-3 pr-10 py-1 rounded text-base">Sort</button>
              <div className="relative right-8">
                <BsArrowDownUp size={12}/>
              </div>
            </div>
            <div className="border-2 py-1 px-1 rounded">
              <PiDownloadSimple size={25}/>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-between mt-3 bg-[#f2f2f2] px-2 font-medium text-gray-600 py-2 mx-3 rounded">
            <div>Order ID</div>
            <div className="flex items-center gap-2">
              <p>Order date</p>
              <FaCaretDown />
            </div>
            <div>Order amount</div>
            <div className="flex items-center gap-2">
              <p>Transaction fees</p>
              <CiCircleInfo />
            </div>
          </div>
          <div>
            {transactions.map((item,index)=>(<TransactionDetails key={index} item={item}/>))}
          </div>
          {/* 1-10 boxes */}
          <div className="flex items-center justify-center gap-5 mt-8 pb-6">
            <div className="flex items-center">
                <div><FaChevronLeft size={14}/></div>
                <button className='border-2 pl-3 pr-10 py-1 rounded text-base'>Previous</button>
            </div>
            <div className="flex gap-4 items-center">
                <p>1</p>
                <p>...</p>
                <p className="bg-[#146eb4] text-white rounded px-[6px] py-[2px]">10</p>
                <p>11</p>
                <p>12</p>
                <p>13</p>
                <p>14</p>
                <p>15</p>
                <p>16</p>
                <p>17</p>
                <p>18</p>
            </div>
            <div className="flex items-center">
                <button className='border-2 pl-3 pr-10 py-1 rounded text-base'>Next</button>
                <div className="relative right-8"><FaChevronRight size={14}/></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentsHistoryDetails;
