import {Box, Flex, useColorModeValue} from "@chakra-ui/react";
import SecondaryNav from "./SecondaryNav";


export default function SideBar({children}: any) {
    return (
        <>
        <Flex color='black' p={25} 
        // h="100vh"
        >
           <Box flex={0.6} bg={useColorModeValue('gray.100', 'gray.900')} mr={10} borderRadius={20}>
              <SecondaryNav/>
           </Box>
            <Box flex={2.4} bg={useColorModeValue('gray.100', 'gray.900')}>
                {children}
            </Box>

        </Flex>
        </>
    )
}