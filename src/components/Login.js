import React, { useContext } from "react";
import logo from "../img/logo.png";
import { useNavigate } from "react-router-dom";
import { PaymentsContext } from "../context/PaymentsContext";

function Login() {
  const navigate = useNavigate();
  const { connectWallet } = useContext(PaymentsContext);

  const handleLoginClick = async () => {
    await connectWallet();
    navigate("/home");
  };

  return (
    <div className="w-full h-screen flex flex-col justify-between px-10 bg-zinc-50">
      <div className="grid md:grid-cols-2 max-w-{1240px} m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-2 ">
          <img src={logo} alt="Logo" className="py-2 px-2 w-80 animate-pulse" />
          <p className="text-1xl font-bold py-2 px-2 max-w-lg">
            One-stop shop for all employment needs for the construction business
            with payment made available via blockchain
          </p>
        </div>
        <div className="border bg-white py-8 rounded-xl shadow-xl item-center text-center">
          <h3 className="font-semibold mb-3">Login To Kryptruction</h3>

          <button
            onClick={handleLoginClick}
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
