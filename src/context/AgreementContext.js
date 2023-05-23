import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import {
  contractAgreementABI,
  contractAgreementAddress,
} from "../abi_contract/constants";

export const AgreementContext = React.createContext();
const { ethereum } = window;

const getAgreementContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const agreementContract = new ethers.Contract(
    contractAgreementAddress,
    contractAgreementABI,
    signer
  );

  return agreementContract;
};

export const AgreementProvider = ({children}) => {





};
