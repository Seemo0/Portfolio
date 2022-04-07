import React from 'react'
import {useColorMode } from '@chakra-ui/color-mode';
import { useMediaQuery } from '@chakra-ui/media-query'
import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
import { Stack, Circle, Flex, Box, Text } from '@chakra-ui/layout';


 function Header() {

    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

   return (
       <Stack>
           <Circle position="absolute" bg="blue.100" opacity="0.1"
                w="300px" h="300px" alignSelf="flex-end" />
            <Flex direction={isNotSmallerScreen ? "row" : "column"}
                spacing="200px" p={isNotSmallerScreen ? "32" : "0"}
                alignSelf="flex-start">
             <Box mt={isNotSmallerScreen ? "0" : 16} align='flex-start'>
              <Text fontSize="3xl" fontWeight="semibold">Hi, I am</Text>
              <Text fontSize="5xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip='text' >Mohamed Ouallal</Text>
              <Text color={isDark ? "gray.200" : "gray.500"}>A Front end Web Developer. 🗣</Text>
              <Button mt={8} colorScheme="blue" onClick={() =>
                        window.open("https://web.facebook.com/SemoOu.75/")
                    }>DM Me</Button>
             </Box>
             <Image alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"}
                    mb={isNotSmallerScreen ? "0" : "12"} borderRadius='full'
                    backgroundColor="transparent" boxShadow="lg"
                    boxSize="300px" src="Capture.PNG" />
            </Flex>  
       </Stack>
   )
 }
 
 export default Header