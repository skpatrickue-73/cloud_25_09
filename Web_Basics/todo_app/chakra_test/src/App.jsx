import { ChakraProvider, createSystem, defaultConfig, defineConfig, Box, Button, Container, Text } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    breakpoints: {
      sm: "320px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    tokens: {
      colors: {
        red: "#EE0F0F",
      },
    },
    semanticTokens: {
      colors: {
        danger: { value: "{colors.red}" },
      },
    },
    keyframes: {
      spin: {
        from: { transform: "rotate(0deg)" },
        to: { transform: "rotate(360deg)" },
      },
    },
    button: {
      colors: {
        blue: "#2596be",
      }
    }
  },
})

const system = createSystem(defaultConfig, config);

export default function App() {
  return (
    <ChakraProvider value={system}>
      <Container>
        <nav>
          <Box>
            <Button color={blue}>Home</Button>
            <Button>About</Button>
            <Button>Contact</Button>
          </Box>
        </nav>
        <main>
          <Box>
            <Text>Wilkommen auf der Webseite</Text>
            <Text>Wilkommen auf der Webseite</Text>
          </Box>
        </main>
      </Container>
    </ChakraProvider>
  );
}
