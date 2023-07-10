import {Box, Flex, Heading, Stack, Text, useColorModeValue} from "@chakra-ui/react";
import SideBar from "../components/nav/SideBar";
import React from "react";
import {DataContext} from "../context";
import {DataContextType} from "../types";
import ReactMarkdown from "react-markdown";


export default function UseCases() {
    const { data } = React.useContext(DataContext) as DataContextType;
    return (
        <>
            <SideBar>
                <Flex direction="column" height="100%" padding={10}>
                    <Text marginBottom="5" fontSize="18">User Cases</Text>
                    <Box flex={0.5} bg={useColorModeValue('gray.100', 'gray.900')} border="1px solid lightGray"
            backgroundColor="white" marginBottom="5" padding={5}>
                        <Stack spacing={3}>
                              <Heading as='h6' size='xs' color="lightGray"
                textTransform="uppercase">
                                User Story
                              </Heading>
                            <Text overflow="auto" h="100px" w="100%" paddingRight={8}>
                                <ReactMarkdown>{data.user_stories}</ReactMarkdown>
                            </Text>
                        </Stack>
                    </Box>
                    <Box flex={2.5} bg={useColorModeValue('gray.100', 'gray.900')} border="1px solid lightGray"
            backgroundColor="white" padding={5}>
                        <Stack spacing={3}>
                              <Heading as='h6' size='xs' color="lightGray"
                textTransform="uppercase">
                                Use Case
                              </Heading>
                            <Text overflow="auto" h="350px" w="100%" paddingRight={8}>
                                <ReactMarkdown>{data.use_cases}</ReactMarkdown>
                            </Text>
                        </Stack>
                    </Box>
                </Flex>
            </SideBar>
        </>
    )
}