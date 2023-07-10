import SideBar from "../components/nav/SideBar";
import {
  Box,
  Flex,
  Grid,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import {DataContext} from "../context";
import {DataContextType} from "../types";
import ReactMarkdown from "react-markdown";

export default function Requirements() {
  const { data } = React.useContext(DataContext) as DataContextType;
  return (
    <>
      <SideBar>
        <Flex direction="column" height="100%" padding={10}>
          <Text marginBottom="5" fontSize="18">Requirements</Text>
          <Box
            flex={0.5}
            bg={useColorModeValue("gray.100", "gray.900")}
            marginBottom="5"
            padding={5}
            border="1px solid lightGray"
            backgroundColor="white"
          >
            <Stack spacing={3}>
              <Heading
                as="h6"
                size="xs"
                textTransform="uppercase"
                color="lightGray"
              >
                Description
              </Heading>
              <Text overflow="auto" h="100px" w="100%" paddingRight={8}>
                <ReactMarkdown>{data.description}</ReactMarkdown>
              </Text>
            </Stack>
          </Box>
          <Box
            flex={2.5}
            bg={useColorModeValue("gray.100", "gray.900")}
            padding={5}
            border="1px solid lightGray"
            backgroundColor="white"
          >
            {/* <Stack spacing={3}> */}
            <Grid gridTemplateRows={'20px 1fr'} gap={3}>
              <Heading
                as="h6"
                size="xs"
                color="lightGray"
                textTransform="uppercase"
              >
                Software requirements specification
              </Heading>
              <Text
                overflow="auto"
                h="350px"
                w="100%"
                color="black"
                paddingRight={8}
              >
                <ReactMarkdown>{data.requirements}</ReactMarkdown>
              </Text>
            </Grid>
            {/* </Stack> */}
          </Box>
        </Flex>
      </SideBar>
    </>
  );
}
