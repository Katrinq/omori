import { Box, Flex, Text } from "@chakra-ui/react";
import SideBar from "../components/nav/SideBar";
import React from "react";
import {DataContext} from "../context";
import {DataContextType} from "../types";
import ReactMarkdown from "react-markdown";

export default function UserStories() {
    const { data } = React.useContext(DataContext) as DataContextType;
  return (
    <>
      <SideBar>
        <Flex direction="column" height="100%" padding={10}>
          <Text marginBottom="5" fontSize="18">
            User Stories
          </Text>
          <Box
            flex={2.5}
            padding={5}
            border="1px solid lightGray"
            backgroundColor="white"
          >
            <Text overflow="auto" h="450px" w="100%" paddingRight={8}>
              <ReactMarkdown>{data.user_stories}</ReactMarkdown>
            </Text>
          </Box>
        </Flex>
      </SideBar>
    </>
  );
}
