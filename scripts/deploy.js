// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {

  const tokenprice=200;
  const DappToken = await hre.ethers.getContractFactory("DappToken");
  const dappToken =await DappToken.deploy(2000);
  await dappToken.deployed();
  const DappTokenSale = await hre.ethers.getContractFactory("DappTokenSale");
  const dappTokenSale = await DappTokenSale.deploy(dappToken.address, tokenprice);
  await dappTokenSale.deployed();
 

  console.log(
    `Lock with 1 ETH and unlock timestamp deployed to ${dappTokenSale.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
