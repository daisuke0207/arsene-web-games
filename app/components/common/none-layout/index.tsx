import { FC, ReactNode } from "react";

import { Layout } from "./presenter";

const Container = ({ children, ...props }: { children?: ReactNode }) => {
  return <Layout {...props}>{children}</Layout>;
};

export default Container;
