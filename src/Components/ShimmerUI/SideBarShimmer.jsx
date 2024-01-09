import React from "react";

const SideBarShimmer = () => {
  return (
    <div className="bg-[#1e2640] w-56  min-h-full flex justify-between flex-col animate-pulse">
      <div>
        <div className="flex items-center justify-between pt-3 mx-4 mb-5 text-white">
          <div className="flex items-center gap-3 animate-pulse">
            <div className="w-10 h-10 rounded-full bg-slate-400"></div>
            <div className="flex flex-col gap-2">
              <p className="w-10 h-4 rounded-full bg-slate-400"></p>
              <p className="w-8 h-3 rounded-full bg-slate-400"></p>
            </div>
          </div>
          <div className="w-4 h-4 rounded-full bg-slate-400"></div>
        </div>
        <div className="flex flex-col gap-5 ml-5 text-slate-300 text-[15px] animate-pulse">
          <div className="flex items-center gap-2 animate-pulse">
            <div className="w-5 h-4 rounded-full bg-slate-400"></div>
            <div className="w-20 h-4 rounded-full bg-slate-400"></div>
          </div>
          <div className="flex items-center gap-2 animate-pulse">
            <div className="w-5 h-4 rounded-full bg-slate-400"></div>
            <div className="w-20 h-4 rounded-full bg-slate-400"></div>
          </div>
          <div className="flex items-center gap-2 animate-pulse">
            <div className="w-5 h-4 rounded-full bg-slate-400"></div>
            <div className="w-20 h-4 rounded-full bg-slate-400"></div>
          </div>
          <div className="flex items-center gap-2 animate-pulse">
            <div className="w-5 h-4 rounded-full bg-slate-400"></div>
            <div className="w-20 h-4 rounded-full bg-slate-400"></div>
          </div>
          <div className="flex items-center gap-2 animate-pulse">
            <div className="w-5 h-4 rounded-full bg-slate-400"></div>
            <div className="w-20 h-4 rounded-full bg-slate-400"></div>
          </div>
          <div className="flex items-center gap-2 animate-pulse">
            <div className="w-5 h-4 rounded-full bg-slate-400"></div>
            <div className="w-20 h-4 rounded-full bg-slate-400"></div>
          </div>
          <div className="flex items-center gap-2 animate-pulse">
            <div className="w-5 h-4 rounded-full bg-slate-400"></div>
            <div className="w-20 h-4 rounded-full bg-slate-400"></div>
          </div>
          <div className="flex items-center gap-2 animate-pulse">
            <div className="w-5 h-4 rounded-full bg-slate-400"></div>
            <div className="w-20 h-4 rounded-full bg-slate-400"></div>
          </div>
          <div className="flex items-center gap-2 animate-pulse">
            <div className="w-5 h-4 rounded-full bg-slate-400"></div>
            <div className="w-20 h-4 rounded-full bg-slate-400"></div>
          </div>
          <div className="flex items-center gap-2 animate-pulse">
            <div className="w-5 h-4 rounded-full bg-slate-400"></div>
            <div className="w-20 h-4 rounded-full bg-slate-400"></div>
          </div>
          <div className="flex items-center gap-2 animate-pulse">
            <div className="w-5 h-4 rounded-full bg-slate-400"></div>
            <div className="w-20 h-4 rounded-full bg-slate-400"></div>
          </div>
          <div className="flex items-center gap-2 animate-pulse">
            <div className="w-5 h-4 rounded-full bg-slate-400"></div>
            <div className="w-20 h-4 rounded-full bg-slate-400"></div>
          </div>
        </div>
      </div>
      {/* credits */}
      {/* <div>
        <div className="bg-[#353c53] mx-4 rounded-md flex mb-4 items-center gap-2">
          <div className="bg-[#494f64] ml-2 py-[2px] px-1 rounded"></div>
          <div className="py-[6px]">
            <p className="text-[13px] text-slate-300">Available credits</p>
            <p className="text-white">222.10</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default SideBarShimmer;
