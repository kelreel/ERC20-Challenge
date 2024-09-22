import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-verify";
import "@openzeppelin/hardhat-upgrades";
import "@nomicfoundation/hardhat-verify";
import "hardhat-deploy";

import dotenv from "dotenv";

dotenv.config();

const deployerPrivateKey = process.env.PRIVATE_KEY ?? "";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  defaultNetwork: "scrollSepolia",
  paths: {
    sources: "./Challenge",
  },
  namedAccounts: {
    deployer: {
      // By default, it will take the first Hardhat account as the deployer
      default: 0,
    },
  },
  networks: {
    // scroll: {
    //   url: "https://scroll.drpc.org",
    //   accounts: [deployerPrivateKey],
    // },
    scrollSepolia: {
      url: "https://sepolia-rpc.scroll.io",
      accounts: [deployerPrivateKey],
    },
  },
  sourcify: {
    enabled: true,
  },
};

export default config;
