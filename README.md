# Hardhat and Cronos project

This project demonstrates a simple way to create new coin contract and deploy to Cronos Testnet. Also, provided a frontend to mint the new coin with integrating with Metamask.

## Prerequisite


if you want to create a deploy a new contract instance, please follow the below step.
1. change the module in tsconfig.json to "CommonJS"
```shell
  "compilerOptions": {
    "target": "es2020",
    "module": "CommonJS",     // this change to CommonJS
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true,
    "resolveJsonModule": true,
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "allowSyntheticDefaultImports": true,
    "noFallthroughCasesInSwitch": true,
    "moduleResolution": "node",
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": [
    "src",
    "webpack.config.js"
  ]
}
```
2. Compile the contract
```shell
npm run hardhat-compile
```
3. Setup a .env file with your wallet account private key and Cronos Explorer testnet api key like below:
```shell
MY_PRIVATE_KEY=<your private key>
CRONOS_EXPLORER_TESTNET_API_KEY=<your api key>
```
4. Deploy the contract to cronos testnet
```shell
npm run contract-deploy
```
5. After step 4, you will see the contract address logged. You can verify the contract using cronos explorer by below command
```shell
npx hardhat verify --network cronosTestnet <deployed contract address>
```

6. If no problem with the deployment, you can replace the Abi in src/config/contracts

7. Replace the erc20 address in the src/config/config.ts


## Run the react app locally
Install dependencies

```bash
  npm install
```

Run the react app

```bash
  npm start
```