// helper/utils.ts
import { ethers } from "ethers"; // npm install ethers

import * as config from "../config/config";
import * as ERC20Json from "../config/contracts/NEWCToken.json";

export const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const hexToInt = (s: string) => {
  const bn = ethers.BigNumber.from(s);
  return parseInt(bn.toString());
};

export const reloadApp = () => {
  window.location.reload();
};

// Get the last block number
export const getLastBlockNumber = async (ethersProvider: any): Promise<any> => {
  return ethersProvider.getBlockNumber();
};

// Get the CRO balance of address
export const getCroBalance = async (
  serverWeb3Provider: ethers.providers.JsonRpcProvider,
  address: string
): Promise<number> => {
  const balance = await serverWeb3Provider.getBalance(address);
  // Balance is rounded at 2 decimals instead of 18, to simplify the UI
  return (
    ethers.BigNumber.from(balance)
      .div(ethers.BigNumber.from("10000000000000000"))
      .toNumber() / 100
  );
};

// Get the NEWC token balance of address
// The NEWC is a ERC20 smart contract, its address is retrieved from
// the config/config.ts file
// and the ABI from config/contracts/MyERC20MintableByAnyone.json
export const getBalance = async (
  serverWeb3Provider: ethers.providers.JsonRpcProvider,
  address: string
): Promise<number> => {
  // Create ethers.Contract object using the smart contract's ABI
  const contractAbi = ERC20Json.abi;
  const readContractInstance = new ethers.Contract(
    config.configVars.erc20.address,
    contractAbi,
    serverWeb3Provider
  );
  const contractResponse = await readContractInstance.balanceOf(address);
  const balanceBigNumber = ethers.BigNumber.from(contractResponse);
  const divisor = ethers.BigNumber.from(10).pow(8);
  const balance = balanceBigNumber.div(divisor).toNumber();
  
  return balance;
};

// Generate a ethers.Contract instance of the contract object
// together with a signer that will trigger a transaction
// approval in the wallet whenever it is called by the Dapp
export const getWriteContractInstance = async (
  browserWeb3Provider: any
): Promise<ethers.Contract> => {
  const ethersProvider = browserWeb3Provider;
  const contractAbi = ERC20Json.abi;
  // Create ethers.Contract object using the smart contract's ABI
  const readContractInstance = new ethers.Contract(
    config.configVars.erc20.address,
    contractAbi,
    ethersProvider.getSigner(0)
  );
  return readContractInstance;
};
