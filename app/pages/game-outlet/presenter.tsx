import { Box } from "@chakra-ui/react";

type Props = {
  children?: React.ReactNode;
};

export const GameOutlet: React.VFC<Props> = ({ children }) => {
  return (
    <Box w="100%" h="100%" m="0 auto">
      {children}
    </Box>
  );
};
