import React from "react";


function PaymentPageShimmer() {
  const transactions = [1, 2, 3, 4, 5, 6, 7, 8,9];
  return (
    <div className="my-3 animate-pulse">
      <div>
        <div className="flex items-center justify-between mx-10 mb-3 animate-pulse">
          <div className="flex gap-4 animate-pulse">
            <p className="h-4 rounded-full w-14 bg-slate-400"></p>
            <div className="flex items-center justify-center gap-[6px] text-[12px] text-[#4D4D4D]">
              <div className="w-4 h-4 rounded-full bg-slate-400"></div>
              <p className="h-4 rounded-full w-14 bg-slate-400"></p>
            </div>
          </div>
          <div className="flex text-[#808080]">
            <div className="relative left-8 top-[8px] w-5 h-5 bg-slate-300 rounded-full"></div>
            <input
              type="text"
              className="w-[400px] h-8 rounded-full bg-slate-400"
            />
          </div>
          <div className="flex gap-3 text-[#4c4c4c]">
            <div className="w-8 h-8 rounded-full bg-slate-400"></div>
            <div className="w-8 h-8 rounded-full bg-slate-400"></div>
          </div>
        </div>
        {/* line */}
        <div className="h-[1px] w-full bg-slate-200"></div>
        {/* Overview */}
        <div className="mx-10 animate-pulse">
          <div className="flex justify-between my-8">
            <div className="w-24 h-6 rounded-full bg-slate-400"></div>
            <div className="flex items-center gap-2 text-gray-600">
              <button className="w-20 h-8 rounded-full bg-slate-400"></button>
            </div>
          </div>
          <div className="flex gap-6 animate-pulse">
            <div className="flex flex-col w-1/2 px-5 py-5 rounded gap-7 custom-shadow bg-slate-300">
              <div className="h-4 rounded-full w-28 bg-slate-400"></div>
              <div className="w-24 h-8 rounded-full bg-slate-400"></div>
            </div>
            <div className="flex flex-col w-1/2 px-5 py-5 rounded gap-7 custom-shadow bg-slate-300">
              <div className="w-32 h-4 rounded-full bg-slate-400"></div>
              <div className="w-40 h-8 rounded-full bg-slate-400"></div>
            </div>
          </div>
        </div>
        <div className="mx-10 mt-10">
          <div>
            <div className="mb-10 animate-pulse">
              <p className="w-40 h-5 rounded-full bg-slate-400"></p>
            </div>
            <div className="mb-10 custom-shadow">
              <div className="flex items-center justify-between animate-pulse">
                <div className="flex text-gray-500">
                  <div className="relative w-4 h-4 rounded-full left-8 top-3 bg-slate-300"></div>
                  <input
                    type="text"
                    className="h-5 rounded-full w-60 bg-slate-400"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    <div className="w-32 h-5 rounded-full bg-slate-400"></div>
                  </div>
                  <div className="h-5 rounded-full w-14 bg-slate-400 "></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mt-3 bg-[#f2f2f2] px-2 font-medium text-gray-600 py-2 mx-3 rounded">
                  <div className="h-4 rounded-full w-14 bg-slate-400"></div>
                  <div className="w-16 h-4 rounded-full bg-slate-400"></div>
                  <div className="w-20 h-4 rounded-full bg-slate-400"></div>
                  <div className="w-24 h-4 rounded-full bg-slate-400"></div>
                </div>
                <div>
                  {transactions.map((item, index) => (
                    <div key={index}>
                      <div className="animate-pulse">
                        <div className="flex justify-between px-4 py-1 m-3 text-gray-600 ">
                          <div className="w-16 h-4 rounded-full bg-slate-400"></div>
                          <div className="ml-[-50px] h-4 w-20 rounded-full bg-slate-400"></div>
                          <div className="mr-[50px] h-4 w-16 rounded-full bg-slate-400"></div>
                          <div className="w-12 h-4 rounded-full bg-slate-400"></div>
                        </div>
                        <div className="h-[1px] w-[97%] bg-slate-200 mx-4"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentPageShimmer;
