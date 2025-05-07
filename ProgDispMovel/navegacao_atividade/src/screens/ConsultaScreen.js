import React, { useContext } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { UserContext } from "../context/UserContext";

export default function ConsultaScreen() {
  const { usuarios } = useContext(UserContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Usuários Cadastrados</Text>
      {usuarios.length === 0 ? (
        <Text style={styles.noUsers}>Nenhum usuário cadastrado.</Text>
      ) : (
        <FlatList
          data={usuarios}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.userCard}>
              <Text>👤 {item.nome}</Text>
              <Text>📧 {item.email}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    alignSelf: "center",
  },
  noUsers: { textAlign: "center", color: "#888" },
  userCard: {
    padding: 10,
    marginVertical: 6,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 6,
    backgroundColor: "#f9f9f9",
  },
});
