import { ethers, upgrades } from "hardhat";

async function main() {
  const OrderBook =
    await ethers.getContractFactory("OrderBook");
  const orderBook = await upgrades.upgradeProxy("0x7FB7DEf77fb1D3B7eC7f11D094aD1F89535cA1B3", OrderBook);
  console.log("OrderBook Upgraded", await orderBook.getAddress());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
