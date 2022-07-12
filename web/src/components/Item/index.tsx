import React from "react";
import { Box, Flex, Text, Img, List } from "@chakra-ui/react";

export default function Item({ message }) {
  return (
    <List
      background="#00aced"
      borderRadius="0.375rem"
      padding="20px"
      borderBottom="0.5px solid #888"
      maxW="50rem"
      mb="1rem"
    >
      <Flex
        alignItems="center"
        display="flex"
        justifyContent={
          message.name === "Professor" ? "flex-end" : "flex-start"
        }
      >
        {message.name === "Professor" ? (
          <>
            <Box ml="10px" className="user-info">
              <Text fontSize="1.5rem" color="#fff" mt="0.5rem">
                {message.name}
              </Text>
            </Box>
            <Img
              w="54px"
              h="54px"
              ml="1rem"
              borderRadius="50%"
              src="https://www.gov.br/cdn/sso-status-bar/src/image/user.png"
              alt={message.github_username}
            />
          </>
        ) : (
          <>
            <Img
              w="54px"
              h="54px"
              borderRadius="50%"
              src="https://www.gov.br/cdn/sso-status-bar/src/image/user.png"
              alt={message.github_username}
            />
            <Box ml="10px" className="user-info">
              <Text fontSize="1.5rem" color="#fff" mt="0.5rem">
                {message.name}
              </Text>
            </Box>
          </>
        )}
      </Flex>
      <Text
        color="#000"
        fontSize="14px"
        lineHeight="20px"
        m="10px 0"
        align="justify"
      >
        {message.message}
      </Text>
    </List>
  );
}
