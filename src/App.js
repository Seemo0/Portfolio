import { VStack, Flex, Heading, Spacer } from '@chakra-ui/layout';
import { IconButton } from '@chakra-ui/react';
import { FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { useColorMode } from '@chakra-ui/color-mode';
import Header from "./components/Header";
import Profile from "./components/Profile";
import Social from "./components/Socials";

function App() {

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
     <VStack p={5}>
       <Flex w="100%">
          <Heading
            ml="8" size="md" fontWeight='semibold' color="cyan.400"> welcome</Heading>
       
        <Spacer></Spacer>
        <IconButton icon={<FaLinkedin />} isRound='true' onClick={() => window.open("https://www.linkedin.com/in/mohamed-ouallal-9b2740174/")}>     </IconButton>
        <IconButton ml={2} icon={<FaInstagram />} isRound='true' onClick={() => window.open("https://www.instagram.com/seemo.ou/")}></IconButton>
        <IconButton ml={2} icon={<FaGithub />} isRound='true' onClick={() => window.open("https://github.com/Seemo0")}></IconButton>
        <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>
      </Flex>
      <Header></Header>
      <Social></Social>
      <Profile></Profile>
     </VStack>
  );
}

export default App;
