import React, { useState, useEffect } from "react";
import { Box, Text, UnorderedList, Avatar } from "@chakra-ui/react";

import { api } from "../services/api";

import Form from "../components/Form";
import Item from "../components/Item";

export default function App() {
  const [messages, setMessage] = useState([]);

  useEffect(() => {
    async function loadMessages() {
      const response = await api.get("/message");

      setMessage(response.data);
    }

    loadMessages();
  }, [messages]);

  async function handleAddMessage(data) {
    const response = await api.post("/message", data);

    setMessage([...messages, response.data]);
  }

  return (
    <Box h="100vh">
      <Box
        position="fixed"
        top={0}
        left={0}
        right={0}
        borderBottom="1px solid #fff"
        h="5rem"
        mb="1rem"
        p={5}
        display="flex"
        alignItems="center"
        bg="#00aced"
      >
        <Avatar src="https://www.gov.br/cdn/sso-status-bar/src/image/user.png" />
        <Text fontWeight="bold" fontSize="1.5rem" ml="1rem" color="#fff">
          Aluno
        </Text>
      </Box>
      <Box mt="6rem" pb="5rem">
        {messages.map((message) => (
          <UnorderedList
            display="flex"
            justifyContent={
              message.name === "Professor" ? "flex-end" : "flex-start"
            }
            mr="1rem"
          >
            <Item key={message._id} message={message} />
          </UnorderedList>
        ))}
      </Box>
      <Form onSubmit={handleAddMessage} />
    </Box>
  );
}
