import { readFileSync } from "fs";
import { sdk } from "./helpers.js";

async function main() {
  const bundleModuleAddress = "0x7f9e5264Fd119f2A97Ef83D804564BA2DD4379Cb";
  const bundleModule = sdk.getBundleModule(bundleModuleAddress);

  console.log("Creating NFT Batch...");

  const created = await bundleModule.createAndMintBatch([
    {
      metadata: {
        name: "ciri",
        description: "The Witcher",
        image: readFileSync("./assets/ciri.jpeg"),
        properties: {
          rarity: "a bit rare",
          fanciness: 7,
        },
      },
      supply: 30,
    },
    {
      metadata: {
        name: "geralt of rivia",
        description: "The Witcher",
        image: readFileSync("./assets/geralt-of-rivia.jpeg"),
        properties: {
          rarity: "super rare!",
          fanciness: 10,
        },
      },
      supply: 15,
    },
    {
      metadata: {
        name: "Geralt",
        description: "The Witcher",
        image: readFileSync("./assets/Geralt.jpeg"),
        properties: {
          rarity: "a bit rare",
          fanciness: 7,
        },
      },
      supply: 30,
    },
    {
      metadata: {
        name: "let the hunt begin",
        description: "The Witcher",
        image: readFileSync("./assets/letthehuntbegin.jpeg"),
        properties: {
          rarity: "super rare!",
          fanciness: 10,
        },
      },
      supply: 15,
    },
  ]);

  console.log("NFT Created!");
  console.log(JSON.stringify(created, null, 2));
}
try {
  await main();
} catch (error) {
  console.error("Error Minting the NFTs", error);
  process.exit(1);
}
