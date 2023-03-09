import React from "react";
import Navbar from "./Navbar";


function Payment() {
  return (
    <div>
      <Navbar />
      <div className="w-full h-screen flex flex-col justify-between px-10 bg-zinc-50">
        <div className="grid md:grid-cols-2 max-w-{1240px} m-auto space-y-10">
          <div className="flex flex-col justify-center md:item-start w-full">
            <p className="font-bold text-6xl text-red-800 px-2 py-2">
              Kryptruction Payments
            </p>
            <p className="font-semibold text-lg px-2 py-2">
              Simplified and enhanced payments through the use of the Ethereum
              blockchain
            </p>
            <p className="font-semibold text-sm px-2 py-2 animate-pulse">
              Using the Metamask Wallet, you can pay your clients and suppliers
              more quickly anywhere in the world
            </p>
          </div>

          <div className="border bg-white py-8 rounded-xl shadow-xl item-center text-center px-5 w-full">
            <h1 className="font-semibold text-xl mb-3">Kryptruction Payments</h1>
            <div className=" flex flex-col items-center ">
              <input
                placeholder="Address To"
                name="addressTo"
                type="text"
                className="items-center text-center w-full placeholder:text-red-300 rounded-full border-b-2 bg-zinc-50 m-2 py-1 "
              />
              <input
                placeholder="Amount (ETH)"
                name="amount"
                type="number"
                className="items-center text-center w-full placeholder:text-red-300 rounded-full border-b-2 bg-zinc-50 m-2 py-1"
              />
            </div>

            <button className="mt-10 py-2 px-4 font-bold">
              Submit Payment
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
