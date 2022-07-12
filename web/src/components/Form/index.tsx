import React, { useState, useEffect } from "react";
import { Box, Button, Input, Text } from "@chakra-ui/react";

export default function Form({ onSubmit }) {
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    setMessage("");
    await onSubmit({
      message,
      name: "Professor",
    });
  }

  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
      bg="#fff"
      borderTop="1px solid #00aced"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      position="fixed"
      bottom={0}
      right={0}
      left={0}
      p="0.5rem"
    >
      <Box className="input-block" w="100%">
        <Input
          w="100%"
          border="0"
          borderRadius="0"
          borderBottom="1px solid #9699B0"
          name="message"
          id="message"
          required
          value={message}
          placeholder="Mensagem..."
          onChange={(e) => setMessage(e.target.value)}
        />
      </Box>

      <Button
        w="7rem"
        h="3rem"
        ml="2rem"
        border="0"
        margin-top="30px"
        background="#00aced"
        border-radius="0.375rem"
        padding="1rem"
        font-size="16px"
        font-weight="bold"
        color="#fff"
        transition="background 0.5s"
        type="submit"
      >
        Enviar
      </Button>
    </Box>
  );
}
