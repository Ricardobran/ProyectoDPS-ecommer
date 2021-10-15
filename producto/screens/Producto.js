import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import SearchBar from "../components/searchBar";
import Categorias from "../components/Categorias";
import ItemsHome from "../components/itemsHome";
import ItemsProducto from "../components/itemsProducto";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.searchbar}>
        <SearchBar />
      </View>
      <View style={styles.Body}>
        <ItemsProducto />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D5D5D3",
  },
  searchbar: {
    width: "100%",
    marginTop: 10,
    alignItems: "center",
  },
  Body: {
    flexDirection: "row",
  },
});