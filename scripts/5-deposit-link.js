import { ethers } from "ethers";
import { sdk } from "./helpers.js";

async function main() {
  const packModuleAddress = "0xB8Ded0190DA85D62dB33051F095A1bCFB4AE33b2";
  const packModule = sdk.getPackModule(packModuleAddress);
  console.log("Depositing Link ...");

  const amount = ethers.utils.parseEther("2");

  await packModule.depositLink(amount);
  console.log("Deposited!");

  const balance = await packModule.getLinkBalance();
  console.log(balance);
}

try {
  await main();
} catch (error) {
  console.error("Error Depositing Link", error);
  process.exit(1);
}
