import * as dotenv from "dotenv";

import { HardhatUserConfig, task } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";
import "hardhat-deploy";
import "@openzeppelin/hardhat-upgrades";

dotenv.config();
const { PRIVATE_KEY, POLYGONSCAN_KEY } = process.env;

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
// task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
//   const accounts = await hre.ethers.getSigners();

//   for (const account of accounts) {
//     console.log(account.address);
//   }
// });

// function node(networkName: string) {
//   const fallback = 'http://localhost:8545';
//   const uppercase = networkName.toUpperCase();
//   const uri = process.env[`NODE_${uppercase}`] || fallback;
//   return uri.replace('{{NETWORK}}', networkName);
// }

// function accounts(networkName: string) {
//   const uppercase = networkName.toUpperCase();
//   const accounts = process.env[`ACCOUNTS_${uppercase}`] || '';
//   return accounts
//     .split(',')
//     .map((account) => account.trim())
//     .filter(Boolean);
// }

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more
// interface CustomUserConfig extends HardhatUserConfig {
//   namedAccounts: any
// }


const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.4",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      },
      {
        version: "0.8.10",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      },
      {
        version: "0.8.18",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      },
    ]
  },
  // namedAccounts: {
  //   deployer: 0,
  //   minter: 1,
  //   owner0: 5,
  //   owner1: 2,
  //   owner2: 3,
  //   owner3: 4
  // },
  defaultNetwork: "hardhat",

  networks: {
    // mainnet: {
    //   hardfork: 'istanbul',
    //   url: node('mainnet'),
    //   accounts: accounts('mainnet')
    // },
    // ropsten: {
    //   url: node("ropsten"),
    //   accounts: accounts('ropsten')
    // },
    // rinkeby: {
    //   url: node("rinkeby"),
    //   accounts: accounts('rinkeby')
    // },
    polygon: {
      url: "https://polygon-bor.publicnode.com",
      accounts: [`0x${PRIVATE_KEY}`],
    },
    polygon_mumbai: {
      url: "https://polygon-mumbai-bor.publicnode.com", //
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
  // gasReporter: {
  //   enabled: process.env.REPORT_GAS !== undefined,
  //   currency: "USD",
  // },
  etherscan: {
    apiKey: {
      polygonMumbai: POLYGONSCAN_KEY
    },
  },
};

export default config;
