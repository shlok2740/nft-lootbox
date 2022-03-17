import { readFileSync } from "fs";
import { sdk } from "./helpers.js";

async function main() {
  const bundleModuleAddress = "0x7f9e5264Fd119f2A97Ef83D804564BA2DD4379Cb";
  const bundleModule = sdk.getBundleModule(bundleModuleAddress);

  const packModuleAddress = "0xB8Ded0190DA85D62dB33051F095A1bCFB4AE33b2";
  const packModule = sdk.getPackModule(packModuleAddress);

  console.log("Getting all NFTs from bundle ...");
  const nftsInBundle = await bundleModule.getAll();

  console.log("NFT in Bundle:");
  console.log(nftsInBundle);

  console.log("Creating a pack containing NFTs from bundle...");
  const created = await packModule.create({
    assetContract: bundleModuleAddress,
    metadata: {
      name: "The Witcher Pack!",
      image: readFileSync("./assets/witcher.png"),
    },
    assets: nftsInBundle.map((nft) => ({
      tokenId: nft.metadata.id,
      amount: nft.supply,
    })),
  });
  console.log("pack created");
  console.log(created);
}
try {
  await main();
} catch (error) {
  console.error("Error minting the Nfts", error);
  process.exit(1);
}
