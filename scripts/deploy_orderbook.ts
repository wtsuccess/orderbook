import { ethers, upgrades } from "hardhat";

async function main() {
  const OrderBook = await ethers.getContractFactory("OrderBook");
  const orderBook = await upgrades.deployProxy(
    OrderBook,
    ["0x243084Abef0685D40D3BAE3545eDF0bF35E4Eb1f", "0x01d405e9053Da8EF763f714E78075d936ec1677c", "0x6E3B2903a8253000C942FBbe1ec2485686cFef0C"],
    {
      initializer: "initialize",
    }
  );
  await orderBook.deployed();
  console.log("orderBook address", orderBook.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
