import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";
dotenv.config();

const cronosApiKeyTestnet: string = <string>process.env.CRONOS_EXPLORER_TESTNET_API_KEY;

const myPrivateKey: string = <string>process.env.MY_PRIVATE_KEY;

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    hardhat: {},
    cronosTestnet: {
      url: "https://evm-t3.cronos.org/",
      chainId: 338,
      accounts: [myPrivateKey],
      gasPrice: 5000000000000,
    },
  },
  etherscan: {
    apiKey: {
      cronosTestnet: cronosApiKeyTestnet,
    },
  },
};

export default config;
