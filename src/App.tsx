import { ChakraProvider } from "@chakra-ui/react";
import VentureRoutes from "./components/routes.component";

function App() {
  return (
    <ChakraProvider>
      <VentureRoutes />
    </ChakraProvider>
  );
}

export default App;
