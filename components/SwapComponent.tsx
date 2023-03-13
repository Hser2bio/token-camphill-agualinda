import { usePublicKey, Swap } from "@strata-foundation/react";
import { CSSReset, Text, Image } from "@chakra-ui/react";
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { Lbc } from "@strata-foundation/marketplace-ui";



export function SwapComponent() {
  const { id: idRaw } = useVariables();
  const { publicKey } = useWallet();
  const { setVisible } = useWalletModal();


  const id = usePublicKey(idRaw);

  return <div>
      { publicKey ?
        <Lbc id={id} />

        : <Image 
        src='https://i.imgur.com/DMSXlkY.png'
        alt='Token'>
          </Image>
        
          
      }
          
  </div>
}

function useVariables(): { id: any; } {
  return { id: "CZZ3qUVa8gQZVHA3DY8ak6h5inp76eShbV1WKZNFXjsJ"}
} 

