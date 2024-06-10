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
    address: "0x8a0A3851D62404b12AFB5e5B63671edf7AA774F4", // on Cronos Testnet
  },
};
