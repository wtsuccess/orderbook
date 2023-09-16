import { ethers } from "hardhat";

async function main() {
  const Oracle = await ethers.getContractFactory("Oracle");
  const oracle = await Oracle.deploy("MATIC-ACME", 18);
  await oracle.deployed();
  console.log("oracle address", oracle.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
