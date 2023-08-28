import React, { useState } from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdCallEnd } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";
import { BiSolidContact } from "react-icons/bi";
import { PiClockCounterClockwiseBold } from "react-icons/pi";
import { AiFillLock } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import { BsPersonFillAdd } from "react-icons/bs";

const Dialer = () => {
  const [cal, setCal] = useState("");
  const [result, setResult] = useState("");

  const updateCal = (e) => {
    setCal(cal + e.target.name); // Use '+' to concatenate strings
  };

  const showCom = () => {
    {
      console.log("calling");
    }
  };

  const clear = () => {
    setCal("");
    setResult("");
  };

  const results = () => {
    try {
      setResult(eval(cal).toString());
    } catch {
      setResult("Error");
    }
  };

  return (
      <div class="mx-auto overflow-hidden mt-10 shadow-lg mb-2 bg-[#000000] shadow-lg border rounded-lg lg:w-2/6 md:w-3/6 sm:w-4/6">
        <div class="">
          <div class="p-5 text-white text-center text-3xl bg-[#04387A]-900">
            Phone Pad
          </div>
          <div class="pt-16 p-5 pb-0 text-salate-200 text-right text-3xl bg-[#fff]">
            {cal || 0}
          </div>
          <div class="p-5 text-white text-right text-3xl bg-[#463636]">
            <span class="text-orange-500">{result || ""}</span>
          </div>

          <div class="flex items-stretch bg-[#463636] h-24">
            <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <button
                  class="rounded h-20 w-20 flex text-black items-center bg-white text-salate justify-center shadow-lg hover:border-gray-500 focus:outline-none"
                  onClick={clear}
              >
                <BiArrowBack size={32} />
              </button>
            </div>

            <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <button
                  class="rounded h-20 w-20 flex items-center text-black  bg-white justify-center shadow-lg hover:border-gray-500 focus:outline-none"
                  name="("
                  onClick={showCom}
              >
                <BiSolidPhoneCall color="green" size={32} />
              </button>
            </div>

            <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <button
                  class="rounded h-20 w-20 flex items-center text-black  bg-white justify-center shadow-lg hover:border-gray-500 focus:outline-none"
                  name=")"
                  onClick={updateCal}
              >
                <MdCallEnd color="red" size={32} />
              </button>
            </div>

            <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <button
                  class="rounded h-20 w-20 flex items-center text-black bg-white justify-center shadow-lg hover:border-gray-500 focus:outline-none"
                  name="/"
                  onClick={updateCal}
              >
                <BiSolidContact color="black" size={32} />
              </button>
            </div>
          </div>

          <div class="flex items-stretch bg-[#463636] h-24">
            <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <button
                  class="rounded h-20 w-20 flex items-center text-black bg-white justify-center shadow-lg hover:border-gray-500 focus:outline-none"
                  name="7"
                  onClick={updateCal}
              >
                7
              </button>
            </div>

            <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <button
                  class="rounded h-20 w-20 flex items-center text-black bg-white justify-center shadow-lg hover:border-gray-500 focus:outline-none"
                  name="8"
                  onClick={updateCal}
              >
                8
              </button>
            </div>

            <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <button
                  class="rounded h-20 w-20 flex items-center text-black bg-white justify-center shadow-lg hover:border-gray-500 focus:outline-none"
                  name="9"
                  onClick={updateCal}
              >
                9
              </button>
            </div>

            <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <button
                  class="rounded h-20 w-20 flex  text-black items-center bg-white justify-center shadow-lg hover:border-gray-500 focus:outline-none"
                  name="*"
                  onClick={updateCal}
              >
                <AiFillHeart color="canary" size={32} />
              </button>
            </div>
          </div>

          <div class="flex items-stretch bg-[#463636] h-24">
            <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <button
                  class="rounded h-20 w-20 flex items-center text-black bg-white justify-center shadow-lg hover:border-gray-500 focus:outline-none"
                  name="4"
                  onClick={updateCal}
              >
                4
              </button>
            </div>

            <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <button
                  class="rounded h-20 w-20 flex items-center text-black bg-white justify-center shadow-lg hover:border-gray-500 focus:outline-none"
                  name="5"
                  onClick={updateCal}
              >
                5
              </button>
            </div>

            <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <button
                  class="rounded h-20 w-20 flex items-center text-black bg-white justify-center shadow-lg hover:border-gray-500 focus:outline-none"
                  name="6"
                  onClick={updateCal}
              >
                6
              </button>
            </div>

            <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <button
                  class="rounded h-20 w-20 flex items-center text-black bg-white justify-center shadow-lg hover:border-gray-500 focus:outline-none"
                  name="-"
                  onClick={updateCal}
              >
                <PiClockCounterClockwiseBold size={32} />
              </button>
            </div>
          </div>

          <div class="flex items-stretch bg-[#463636] h-24">
            <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <button
                  class="rounded h-20 w-20 flex items-center text-black bg-white justify-center shadow-lg hover:border-gray-500 focus:outline-none"
                  name="1"
                  onClick={updateCal}
              >
                1
              </button>
            </div>

            <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <button
                  class="rounded h-20 w-20 flex items-center text-black bg-white justify-center shadow-lg hover:border-gray-500 focus:outline-none"
                  name="2"
                  onClick={updateCal}
              >
                2
              </button>
            </div>

            <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <button
                  class="rounded h-20 w-20 flex items-center text-black bg-white justify-center shadow-lg hover:border-gray-500 focus:outline-none"
                  name="3"
                  onClick={updateCal}
              >
                3
              </button>
            </div>

            <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <button
                  class="rounded h-20 w-20 flex text-black items-center bg-white justify-center shadow-lg hover:border-gray-500 focus:outline-none"
                  name="+"
                  onClick={updateCal}
              >
                <BsPersonFillAdd size={32} />
              </button>
            </div>
          </div>

          <div class="flex items-stretch bg-[#463636] h-24 ">
            <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <button
                  class="rounded h-20 w-20 flex items-center text-black  bg-white justify-center shadow-lg hover:border-gray-500 focus:outline-none"
                  name="+"
                  onClick={updateCal}
              >
                +
              </button>
            </div>

            <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <button
                  class="rounded h-20 w-20 flex items-center text-black bg-white justify-center shadow-lg hover:border-gray-500 focus:outline-none"
                  name="0"
                  onClick={updateCal}
              >
                0
              </button>
            </div>

            <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <button
                  class="rounded h-20 w-20 flex items-center text-black bg-white justify-center shadow-lg hover:border-gray-500 focus:outline-none"
                  name="-"
                  onClick={updateCal}
              >
                -
              </button>
            </div>

            <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <button
                  class="rounded h-20 w-20 flex items-center text-black bg-white justify-center shadow-lg hover:border-gray-500 focus:outline-none"
                  onClick={results}
              >
                <AiFillLock size={32} />
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Dialer;
