import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import {useNavigate} from "react-router-dom";



export default function Header() {
  const navigate = useNavigate();
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box cursor="pointer" onClick={() => navigate("/")}>Omori</Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={3}>
              <Button
                colorScheme={'red'}
                bg={'red.400'}
              _hover={{ bg: 'red.500' }}
                onClick={() => navigate("/get-started")}
                >
              Get Started
            </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}