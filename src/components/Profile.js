import React from 'react'
import { useMediaQuery } from '@chakra-ui/media-query';
import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import Icon from '@chakra-ui/icon';
import { DiMongodb, DiReact, DiNodejs, DiBootstrap } from 'react-icons/di'
import { FiCornerDownRight } from "react-icons/fi";


function Profile() {

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  return (
     <Flex direction={isNotSmallerScreen ? "row" : "column"} w="100%"
     maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}>
       <Box alignSelf="center" px="2" py="3">
            <Heading fontWeight="extrabold" color="cyan.500" size="4xl">
                    <Icon color="cyan" p="4" as={FiCornerDownRight} w="24" h="24"/>
            </Heading>
            <Text fontSize="2xl" color="gray.400">Tools im using</Text>        
       </Box>
       <Box alignSelf="center" px="2" py="1">
           <Text fontWeight="bold" fontSize="2xl">Web & Mobile Developer, specialised in Front End Web Development.</Text>
           <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8} >
                    <Flex rounded="xl" direction="column" mt={4} bg="blue.400" h="30vh" w="30vh" 
                      justify="flex-end" _hover={{ bg: "blue.500", }}>
                        <Icon color="white" p="4" as={DiReact} w="24" h="24" />
                        <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
                            ReactJS Apps
                        </Text>
                    </Flex>
                    <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                        bg="gray.100" h="30vh" w="30vh" justify="flex-end" _hover={{ bg: "green.700", }}>
                        <Icon color="black" p="4" as={DiMongodb} w="24" h="24" />
                        <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                            MongoDB
                        </Text>
                    </Flex>
                    <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                        bg="gray.100" h="30vh" w="30vh" justify="flex-end"
                        _hover={{ bg: "green.400", }} >
                        <Icon as={DiNodejs} p="4" w="24" h="24" color="black" />
                        <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                            Node JS
                        </Text>
                    </Flex>
                    <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                        bg="gray.100" h="30vh" w="30vh" justify="flex-end" _hover={{ bg: "purple.600", }}>
                        <Icon color="black" p="4" as={DiBootstrap} w="24" h="24" />
                        <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                            Bootstrap
                        </Text>
                    </Flex>
                </Flex>

       </Box>
     </Flex>
  )
}

export default Profile