import { Box } from "@chakra-ui/react";
import React from "react";
import { useOutlet } from "react-router-dom";

const ProtectedRoute = (): React.JSX.Element => {
  const outlet = useOutlet();
  return (
    <Box>
      <Box w="100%"> protected nav bar </Box>
      {outlet}
    </Box>
  );
};

export default ProtectedRoute;
