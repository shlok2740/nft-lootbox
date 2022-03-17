import { useWeb3 } from "@3rdweb/hooks";
import { useEffect } from "react";
import { ContractInterface, ethers } from "ethers";
import { packAddress } from "../lib/contractAddresses";
import packABI from "../utils/PackABI.json";
import toast from "react-hot-toast";
import Link from "next/link";

export default function usePackEvents() {
  const { address, provider } = useWeb3();
  useEffect(() => {
    if (provider) {
      const abi = packABI as ContractInterface;
      const packContract = new ethers.Contract(packAddress, abi, provider);
      packContract.on("TransferSingle", (_operator, _from, to, _id, _value) => {
        if (to === address) {
          toast.success(
            <div className="flex flex-col gap-2">
              <p className="text-green-800">
                {" "}
                Congratulations Witcher! You were awarded a Precious Gift!
              </p>
              <p>
                View and Open it in the{" "}
                <Link href="/lounge">
                  <a className="underline hover::no-underline">lounge</a>
                </Link>
                !
              </p>
            </div>,
            {
              duration: 5000,
            }
          );
        }
      });
    }
  }, [!!provider]);
  // The dependency array [!!provider] means we’re only going to add the event handler when provider goes from unset to set.
}
