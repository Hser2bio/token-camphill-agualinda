import { usePublicKey, Swap } from "@strata-foundation/react";
import { CSSReset, Text, Image } from "@chakra-ui/react";
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { Lbc } from "@strata-foundation/marketplace-ui";
import { MarketplaceProviders } from "@strata-foundation/marketplace-ui";
import { useRouter } from "next/router";
import { usePublicKey, Swap } from "@strata-foundation/react";
import ReactShadow from "react-shadow/emotion";



export function SwapComponent() {
  const router = useRouter();
  const { id: idRaw } = router.query;
  const { setVisible } = useWalletModal();
  const id = usePublicKey("BTEUcQsVdZEZEYTptTdYo9m7D8iy4v8iRB1vmWRrdpb");

// Shadow div and css reset are not required, but will make sure our styles do not conflict with yours
  return <ReactShadow.div>
    <MarketplaceProviders resetCSS onError={(err) => console.error(err)}>
      <Swap id={id} />
    </MarketplaceProviders>
  </ReactShadow.div>
} 

