import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputStyle}
        placeholder="Encuentra tu nuevo conjunto..."
      />
      <FontAwesome
        name="search"
        size={24}
        color="black"
        style={{ marginRight: 5 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "95%",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#000",
    paddingBottom: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  inputStyle: {
    flex: 1,
    width: "100%",
    height: "100%",
    margin: 5,
  },
});
export default SearchBar;