import React from "react";
import { View, Text } from "react-native";

export default function DetailsScreen({ route }) {
  const { itemId } = route.params; // Desestruturação do parâmetro itemId da rota

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Tela de Detalhes</Text>
      <Text>Item ID: {itemId}</Text>
    </View>
  );
}
