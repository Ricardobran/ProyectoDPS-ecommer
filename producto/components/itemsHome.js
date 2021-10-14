import React, { useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";

const itemHome = () => {
  const [selectedOption, setSelectedOption] = useState("relevante");
  return (
    <View style={styles.container}>
      <View style={styles.pickerContainer}>
        <Text style={{ fontSize: 12 }}>Ordenar por </Text>
        <Picker
          style={styles.picker}
          selectedValue={selectedOption}
          onValueChange={(itemValue) => setSelectedOption(itemValue)}
        >
          <Picker.Item label="Más relevantes" value="relevante" />
          <Picker.Item label="Precio" value="precio" />
        </Picker>
      </View>
      <View style={styles.itemContainer}>
        <View style={styles.item}>
        <Image source={require("../imgs/modelo1.jpg")} style={styles.img} />
          <View style={styles.itemdes}>
            
            <Text style={{ fontSize: 12, fontWeight: "400" }}>Camisa #1</Text>
            <Text style={{ fontSize: 12, fontWeight: "700" }}>USD $$</Text>
            <View style={styles.rate}>
              <FontAwesome
                style={styles.star}
                name="star"
                size={12}
                color="yellow"
              />
              <FontAwesome
                style={styles.star}
                name="star"
                size={12}
                color="yellow"
              />
              <FontAwesome
                style={styles.star}
                name="star"
                size={12}
                color="yellow"
              />
              <FontAwesome
                style={styles.star}
                name="star"
                size={12}
                color="yellow"
              />
              <FontAwesome
                style={styles.star}
                name="star"
                size={12}
                color="yellow"
              />
            </View>
          </View>
        </View>
        <View style={styles.item}>
          <Image source={require("../imgs/modelo1.jpg")} style={styles.img} />
          <View style={styles.itemdes}>
            <Text style={{ fontSize: 12, fontWeight: "400" }}>Camisa #2</Text>
            <Text style={{ fontSize: 12, fontWeight: "700" }}>USD $$</Text>
            <View style={styles.rate}>
              <FontAwesome
                style={styles.star}
                name="star"
                size={12}
                color="yellow"
              />
              <FontAwesome
                style={styles.star}
                name="star"
                size={12}
                color="yellow"
              />
              <FontAwesome
                style={styles.star}
                name="star"
                size={12}
                color="yellow"
              />
              <FontAwesome
                style={styles.star}
                name="star"
                size={12}
                color="yellow"
              />
              <FontAwesome
                style={styles.star}
                name="star"
                size={12}
                color="yellow"
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    width: 130,
    height: "80%",
    marginTop: 40,
    marginLeft: 50,
  },
  item: {
    backgroundColor: "#fff",
    width: "100%",
    height: 150,
    marginTop: 40,
  },
  img: {
    width: 86,
    height: 85,
    marginTop: 10,
    marginLeft: 23,
    marginRight: 21,
  },
  itemdes: {
    marginLeft: 13,
    marginTop: 7,
  },
  rate: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
  },
  star: {
    marginLeft: 2.5,
    marginRight: 2.5,
  },
  pickerContainer: {
    width: 210,
    height: 45,
    marginLeft: 15,
    marginTop: 25,
  },
  picker: {
    width: 190,
    height: "100%",
    borderColor: "black",
    fontSize: 12,
    borderWidth: 2,
  },
});
export default itemHome;