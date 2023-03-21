import React from "react";
import { Box, Center, Flex, HStack, Icon, Text, Link, LinkProps } from "@chakra-ui/react";
import { WalletDisconnectButton, WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';

interface IMenuItemProps extends LinkProps {
  isLast?: boolean;
}

const MenuItem: React.FC<IMenuItemProps> = ({
  children,
  isLast = false,
  href = "/",
  ...rest
}) => (
  <Text
    mb={{ base: isLast ? 0 : 8, sm: 0 }}
    mr={{ base: 0, sm: isLast ? 0 : 8 }}
    display="block"
  >
    <Link href={href} {...rest}>
      {children}
    </Link>
  </Text>
);

export const Header: React.FC = () => (
  <Center
    w="full"
    paddingX={14}
    paddingY={2}
    justifyContent="space-between"
    alignItems="center"
    color="white"
    bg="#02395D"
  >
    <HStack spacing={50}>

      <a href="https://soulagain.crypto-elites.club/"
        rel='noopener' target='_blank'
        style={{ minWidth: "300px" }} /* set the minimum width to retain full size */
      >
        <img src="logo.png" alt="Logo" />
      </a>

      <a href="https://mint.soulagain.crypto-elites.club/"
        rel='noopener' target='_blank'
        style={{ minWidth: "150px" }} /* set the minimum width to retain full size */
      >
        <img src="mint.png" alt="Mint" />
      </a>
    </HStack>
    <Box display={{ md: "block" }} flexBasis={{ base: "100%", md: "auto" }}>
      <HStack
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <WalletMultiButton />
        <WalletDisconnectButton />
      </HStack>
    </Box>
  </Center>
);
