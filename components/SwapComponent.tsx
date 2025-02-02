import { MarketplaceProviders , Lbc } from "@strata-foundation/marketplace-ui";
import { usePublicKey, Swap } from "@strata-foundation/react";
import { CSSReset, Text, Image } from "@chakra-ui/react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import ReactShadow from "react-shadow/emotion";
import { useRouter } from "next/router";
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import styled, { ThemeProvider } from 'styled-components'


const Container = styled.div`
background-color: white; 
display: flex;
justify-content: center;
align-items: center;
border-style: solid;
border-color: white;
border-width: 25px;
`
export function SwapComponent() {
  const router = useRouter();
  const { id: idRaw } = router.query;
  const id = usePublicKey("FF4WJyQp2AV3Rku5oFotY1aGDYjFqVJpH1785TBekcxH");
  const { publicKey } = useWallet();
  const { setVisible } = useWalletModal();

  return <div>
    <MarketplaceProviders resetCSS onError={(err) => console.error(err)}>
      { publicKey ?
        <Container><Swap id={id} /></Container>

        : <Image 
        src='soul.png'
        alt='Token'>
          </Image>
        
          
      }
    </MarketplaceProviders>
    </div>
}