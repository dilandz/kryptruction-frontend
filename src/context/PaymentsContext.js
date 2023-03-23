import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import { contractABI, contractAddress } from "../abi_contract/constants";

export const PaymentsContext = React.createContext();

const { ethereum } = window;

const getContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const paymentContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );

  return paymentContract;
};

export const PaymentProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [formData, setFormData] = useState({
    addressTo: "",
    amount: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [transactionCount, setTransactionCount] = useState(localStorage.getItem("transactionCount"));

  const handleChange = (e, name)=>{
     
      setFormData((prevState)=>({ ...prevState,[name]: e.target.value}));
  }

  //connect the application to the metamask account
  const connectWallet = async () => {
    try {
      if (!window.ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      setCurrentAccount(accounts[0]);

     
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };

  const isWalletConnected = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);

        //getAllTransactions();
      } else {
        console.log("No accounts found");
      }
    } catch (error) {
      console.log(error);
      throw new Error("No ethereum object");
    }
  };

  const makePayment = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      
      const { addressTo, amount, message } = formData; //get the data from the form..
      const paymentContract =  getContract();
      const parsedAmount = ethers.utils.parseEther(amount); // this converts the decimal value to hexa(Gwei to ether)

      //sending ethereum from one address to another
      await ethereum.request({
        method: 'eth_sendTransaction',
        params: [{
          from: currentAccount,
          to: addressTo,
          gas: "0x5208", //21000 Gwei less than 20000 won't work
          value: parsedAmount._hex,
        }],
      });

      //Store the transaction
      const paymentHash = await paymentContract.addToBlockchain(addressTo,parsedAmount,message);

      setIsLoading(true);
      console.log(`Loading - ${paymentHash.hash}`);
      await paymentHash.wait();
      setIsLoading(false);
      console.log(`Success - ${paymentHash.hash}`);

      const transactionsCount = await paymentContract.getTransactionCount();
      setTransactionCount(transactionsCount.toNumber());

      window.location.reload();

    } catch (error) {
      console.log(error);
      throw new Error("No ethereum object");
    }
  };

  useEffect(() => {
    isWalletConnected();
  }, []);

  return (
    <PaymentsContext.Provider value={{ connectWallet, currentAccount, makePayment, formData, setFormData, handleChange }}>
      {children}
    </PaymentsContext.Provider>
  );
};
