import { sdk } from "./helpers.js";

async function main() {
  const packModuleAddress = "0xB8Ded0190DA85D62dB33051F095A1bCFB4AE33b2";
  const packModule = sdk.getPackModule(packModuleAddress);

  console.log("Opening packs...");
  const opened = await packModule.open("0");
  console.log("Opened the pack");
  console.log(opened);
}

try {
  await main();
} catch (error) {
  console.error("Error opening the pack", error);
  process.exit(1);
}
