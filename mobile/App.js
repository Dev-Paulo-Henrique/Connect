import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Text, View, TextInput, FlatList } from "react-native";
import { TouchableOpacity, LogBox } from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { api } from "./src/services/api";

LogBox.ignoreAllLogs();

export default function App() {
  const [messages, setMessages] = useState([]);
  const [msg, setMsg] = useState("");

  const DATA = messages.map((message) => message?.message);

  useEffect(() => {
    async function loadMessages() {
      const response = await api.get("/message");

      setMessages(response.data);
    }

    loadMessages();
  }, [messages]);

  async function handleAddMessage() {
    if (msg) {
      setMsg("");
      const response = await api.post("/message", {
        message: msg,
        name: "Aluno",
      });

      setMessages([...messages, response.data]);
    }
    return;
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <StatusBar backgroundColor="#00aced" style="light" />
      <View
        style={{
          width: "100%",
          marginBottom: 5,
          backgroundColor: "#00aced",
          paddingVertical: 5,
          paddingHorizontal: 10,
          top: 20,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Ionicons name="person-circle" size={50} color="white" />
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            color: "#fff",
            marginLeft: 5,
          }}
        >
          Professor
        </Text>
      </View>
      <FlatList
        data={DATA}
        keyExtractor={(DATA) => DATA?.message}
        renderItem={({ item }) => (
          <Text
            style={{
              padding: 10,
              fontSize: 14,
              minHeight: 44,
              maxHeight: "auto",
              color: "#000",
              backgroundColor: "#fff",
              borderColor: "#ccc",
              borderBottomWidth: 0.5,
            }}
          >
            {item}
          </Text>
        )}
        style={{
          backgroundColor: "#fff",
          marginTop: 15,
          width: "100%",
          height: "auto",
          marginBottom: 60,
          borderBottomWidth: 1,
          borderColor: "#00aced",
        }}
      />
      <View
        style={{
          marginBottom: 5,
          width: "95%",
          position: "absolute",
          borderRadius: 12,
          paddingVertical: -5,
          bottom: 0,
          left: 10,
          right: 10,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TextInput
          value={msg}
          onChangeText={setMsg}
          placeholder="Mensagem..."
          style={{
            height: 50,
            width: "85%",
            margin: 1,
            backgroundColor: "#fff",
          }}
        />
        <TouchableOpacity
          onPress={handleAddMessage}
          style={{
            backgroundColor: "#00aced",
            height: 50,
            width: 50,
            borderRadius: 25,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MaterialIcons name="send" size={25} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
