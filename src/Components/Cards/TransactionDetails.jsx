import React from "react";

const TransactionDetails = ({ item }) => {
  return (
    <div>
      <div className="flex justify-between px-4 py-1 m-3 text-gray-600 ">
        <div className="text-[#146EB4] font-medium text-[14px]">{item.orderId}</div>
        <div className="ml-[-50px] text-[#1A181E]">{item.orderDate}</div>
        <div className="mr-[50px] text-[#1A181E]">₹{item.orderAmount}</div>
        <div className="text-[#1A181E]">₹{item.transactionFees}</div>
      </div>
      <div className="h-[1px] w-[97%] bg-slate-200 mx-4"></div>
    </div>
  );
};

export default TransactionDetails;
