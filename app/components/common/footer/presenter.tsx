import {
  Flex,
  Link,
  Text,
  Breadcrumb,
  BreadcrumbItem,
  Spacer,
} from "@chakra-ui/react";
import { Right } from "@icon-park/react";
import { useMatches } from "remix";

export const Footer = () => {
  const matches = useMatches();
  const showBreadcrumb = matches.length >= 3;

  return (
    <Flex as="footer" h="100%" align="center">
      <Flex>
        <Breadcrumb
          separator={<Right theme="outline" size="15" fill="#ffffff" />}
        >
          {showBreadcrumb &&
            matches
              .filter((match) => match.handle && match.handle.breadcrumb)
              .map((match, index) => (
                <BreadcrumbItem key={index}>
                  {match.handle.breadcrumb(match.params)}
                </BreadcrumbItem>
              ))}
        </Breadcrumb>
      </Flex>
      <Spacer />
      <Link href="https://arsene.one" variant="outline">
        <Text fontSize="xl">arsene.one</Text>
      </Link>
    </Flex>
  );
};
