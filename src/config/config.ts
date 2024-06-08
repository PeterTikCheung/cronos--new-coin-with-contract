// config/config.ts
export const configVars = {
  mode: "regular",
  rpcNetwork: {
    rpcUrl: "https://evm-t3.cronos.org/",
    chainId: 338,
    chainIdHex: "0x152",
    chainName: "Cronos Testnet",
    chainType: "testnet",
    nativeCurrency: {
      name: "CRO",
      symbol: "CRO",
      decimals: 18,
    },
    blockExplorerUrl: "https://cronos.crypto.org/explorer/testnet3/",
  },
  erc20: {
    address: "0x47ef2d14386d6d99637eec6a3b1c30f41c160cc3", // on Cronos Testnet
    address_mainnet: "0xecee7183cb41f382972d436862d690a71520318a", // on Cronos Mainnet
  },
};
