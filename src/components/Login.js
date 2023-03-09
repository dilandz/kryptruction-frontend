import React, { useState } from "react";
import logo from "../img/logo.png";
import { useNavigate } from "react-router-dom";

function Login() {
  const [currentAccount, setCurrentAccount] = useState("");

  const { ethereum } = window;
  const navigate = useNavigate();

  const connectWallet = async () => {
    try {
      if (!window.ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      setCurrentAccount(accounts[0]);
      navigate('/home');
      //window.location.reload();
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };

  return (
    <div className="w-full h-screen flex flex-col justify-between px-10 bg-zinc-50">
      <div className="grid md:grid-cols-2 max-w-{1240px} m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-2 ">
          <img src={logo} alt="Logo" class="py-2 px-2 w-80" />
          <p class="text-1xl font-bold py-2 px-2 max-w-lg">
            One-stop shop for all employment needs for the construction business
            with payment made available via blockchain
          </p>
        </div>
        <div className="border bg-white py-8 rounded-xl shadow-xl item-center text-center">
          <h3 className="font-semibold mb-3">Login To Kryptruction</h3>

          <button
            onClick={connectWallet}
            className="mb-3py-2 px-4 font-bold animate-pulse"
          >
            Connect Via MetaMask
          </button>
         
          <h3 className="text-left ml-6  mt-4 font-bold text-sm">Note:</h3>
          <p className="font-semibold text-gray-900 text-justify px-4 py-4 text-sm">
            If you don't have the MetaMask extension installed, please install
            the MetaMask extension to your browser to contiune logging in.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
