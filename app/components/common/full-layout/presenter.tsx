import type { ReactNode } from "react";
import { Box } from "@chakra-ui/react";

export const Layout = ({ children }: { children?: ReactNode }) => {
  return (
    <Box minH="100vh" minW="100%" alignItems="center" justifyContent="center">
      {children}
    </Box>
  );
};
