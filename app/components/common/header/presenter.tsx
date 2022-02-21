import { NavLink } from "remix";
import { Box, Flex, Spacer, Text } from "@chakra-ui/react";

export const Header = () => {
  type Props = {
    children: React.ReactNode;
    to: string;
  };

  const HeaderLink = (props: Props) => (
    <Box opacity=".7" _hover={{ opacity: 1 }}>
      <NavLink to={props.to}>{props.children}</NavLink>
    </Box>
  );

  return (
    <Flex as="header" h="100%" maxW="800px" m="0 auto" align="center">
      <Flex gap="3" align="center">
        <NavLink to="/">
          <Flex align="center">
            <Text h="100%" fontSize="2xl" fontWeight="bold">
              Arsene Games
            </Text>
          </Flex>
        </NavLink>
      </Flex>
      <Spacer />
      <Flex fontSize="lg" gap="5">
        <HeaderLink to="/">Home</HeaderLink>
        <HeaderLink to="/games">Game</HeaderLink>
      </Flex>
    </Flex>
  );
};
