import React from "react";
import { StyleSheet, View, Text, Pressable,SafeAreaView } from "react-native";
import SearchBar from "./../components/searchBar";
import Categorias from "./../components/Categorias";
import ItemsHome from "./../components/ItemsHome";
import {StyledContainer} from './../components/styles';
import { StatusBar } from 'expo-status-bar';
export default function ScreenA() {
  return (
<>
      <StatusBar style="auto" />
    
    <View style={styles.container}>
      <View style={styles.searchbar}>
        <SearchBar />
      </View>
      <View style={styles.Body}>
        <Categorias />
        <ItemsHome />
      </View>
    </View>
   
</>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#D5D5D3",
  },
  text: {
    fontSize: 40,
    fontWeight: "bold",
    margin: 10,
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
