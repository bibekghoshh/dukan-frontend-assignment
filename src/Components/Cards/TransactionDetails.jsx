import React from "react";

const TransactionDetails = ({ item }) => {
  return (
    <div>
      <div className="flex justify-between m-3 px-4  text-gray-600 py-1 ">
        <div className="text-[#4089c2] font-medium">{item.orderId}</div>
        <div className="ml-[-50px]">{item.orderDate}</div>
        <div className="mr-[50px]">₹{item.orderAmount}</div>
        <div>₹{item.transactionFees}</div>
      </div>
      <div className="h-[1px] w-[97%] bg-slate-200 mx-4"></div>
    </div>
  );
};

export default TransactionDetails;
