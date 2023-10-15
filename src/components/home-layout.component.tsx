import { Box } from "@chakra-ui/react";
import React from "react";
import { useOutlet } from "react-router-dom";

const HomeLayout = (): React.JSX.Element => {
  const outlet = useOutlet();
  return (
    <Box>
      <Box w="100%"> not signed in nav bar </Box>
      {outlet}
    </Box>
  );
};

export default HomeLayout;
