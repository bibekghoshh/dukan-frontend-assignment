import React from "react";
import logo from "../Assets/toplogo.png";
import { FaChevronDown } from "react-icons/fa";
import { GoHome, GoPeople } from "react-icons/go";
import { PiNotepad, PiSquaresFourLight } from "react-icons/pi";
import { BsTruck } from "react-icons/bs";
import { AiOutlineSound } from "react-icons/ai";
import { MdPayments, MdOutlineColorLens } from "react-icons/md";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { LiaToolsSolid } from "react-icons/lia";
import { CiDiscount1, CiWallet } from "react-icons/ci";
import { HiOutlineBolt } from "react-icons/hi2";

const SideBar = () => {
  return (
    <div className="bg-[#1e2640] w-56  min-h-full flex justify-between flex-col">
      <div>
        <div className="flex items-center justify-between pt-3 mx-4 mb-5 text-white">
          <div className="flex items-center gap-3">
            <div>
              <img className="rounded-md w-11" src={logo} alt="" />
            </div>
            <div>
              <p className="text-[15px] text-gray-100">Nishyan</p>
              <p className="text-[13px] text-gray-300 underline underline-offset-4">Visit store</p>
            </div>
          </div>
          <div>
            <FaChevronDown />
          </div>
        </div>
        <div className="flex flex-col gap-5 ml-5 text-slate-300 text-[15px] ">
          <div className="flex items-center gap-2">
            <div>
              <GoHome />
            </div>
            <div>Home</div>
          </div>
          <div className="flex items-center gap-2">
            <div>
              <PiNotepad />
            </div>
            <div>Orders</div>
          </div>
          <div className="flex items-center gap-2">
            <div>
              <PiSquaresFourLight />
            </div>
            <div>Products</div>
          </div>
          <div className="flex items-center gap-2">
            <div>
              <BsTruck />
            </div>
            <div>Delivery</div>
          </div>
          <div className="flex items-center gap-2">
            <div>
              <AiOutlineSound />
            </div>
            <div>Marketing</div>
          </div>
          <div className="flex items-center gap-2">
            <div>
              <TbBrandGoogleAnalytics />
            </div>
            <div>Analytics</div>
          </div>
          <div className="flex items-center gap-2">
            <div>
              <MdPayments />
            </div>
            <div>Payments</div>
          </div>
          <div className="flex items-center gap-2">
            <div>
              <LiaToolsSolid />
            </div>
            <div>Tools</div>
          </div>
          <div className="flex items-center gap-2">
            <div>
              <CiDiscount1 />
            </div>
            <div>Discounts</div>
          </div>
          <div className="flex items-center gap-2">
            <div>
              <GoPeople />
            </div>
            <div>Audience</div>
          </div>
          <div className="flex items-center gap-2">
            <div>
              <MdOutlineColorLens />
            </div>
            <div>Appearance</div>
          </div>
          <div className="flex items-center gap-2">
            <div>
              <HiOutlineBolt />
            </div>
            <div>Plugins</div>
          </div>
        </div>
      </div>
      {/* credits */}
      <div>
        <div className="bg-[#353c53] mx-4 rounded-md flex mb-4 items-center gap-2">
          <div className="bg-[#494f64] ml-2 py-[2px] px-1 rounded">
            {" "}
            <CiWallet className="text-white" size={30} />
          </div>
          <div className="py-[6px]">
            <p className="text-[13px] text-slate-300">Available credits</p>
            <p className="text-white">222.10</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
