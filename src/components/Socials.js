import React from 'react'
import Icon from '@chakra-ui/icon'
import { HStack } from '@chakra-ui/layout'
import { FaFacebookF, FaInstagram, FaSpotify } from 'react-icons/fa'


function Socials() {
  return (
    <HStack spacing="24">
        <Icon as={FaFacebookF} boxSize="50" />
        <Icon as={FaInstagram} boxSize="50" />
        <Icon as={FaSpotify} boxSize="50" />
        
    </HStack>
  )
}

export default Socials