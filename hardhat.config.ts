import { HardhatUserConfig } from "hardhat/config";
import "dotenv/config"
import "@nomicfoundation/hardhat-toolbox";

const GORLI_URL = process.env.GORLI_URL as string;
const PRIVATE_KEY = process.env.PRIVATE_KEY as string;

console.log("GORLI_URL", GORLI_URL);

const config: HardhatUserConfig = {
  solidity: "0.8.11",
  networks: {
    goerli: {
      url: GORLI_URL,
      accounts:[PRIVATE_KEY],
      allowUnlimitedContractSize: true,
      gas: 2100000,
      gasPrice: 8000000000,

    },
  }
};

export default config;
