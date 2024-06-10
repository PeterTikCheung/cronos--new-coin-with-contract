import { ethers } from "hardhat";

async function main() {
    const NEWCTokenContract = await ethers.getContractFactory("NEWCToken");
    const NEWCTokenInstance = await NEWCTokenContract.deploy();

    console.log("NEWCToken deployed to: " , NEWCTokenInstance.target);
  }
  
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});