import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  SectionList,
  TouchableOpacity,
  CheckBox,
} from "react-native";

const DATA = [
  {
    title: "Mujeres",
    data: ["Vestidos", "Blusas", "Conjuntos", "Zapatos"],
  },
  {
    title: "Hombres",
    data: ["Pantalones", "Camisas", "Trajes", "Zapatos"],
  },
  {
    title: "Niños",
    data: ["Pantalones", "Camisas", "Trajes", "Zapatos"],
  },
];

const Categorias = () => {
  const [isSelectedXS, setSelectionXS] = useState(false);
  const [isSelectedS, setSelectionS] = useState(false);
  const [isSelectedM, setSelectionM] = useState(false);
  const [isSelectedL, setSelectionL] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Categorías</Text>
      <SectionList
        keyExtractor={(item, index) => index.toString()}
        sections={DATA}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item}>
            <Text style={{ marginRight: 20, fontSize: 12 }}>{item}</Text>
          </TouchableOpacity>
        )}
        renderSectionHeader={({ section }) => (
          <View style={styles.titulo}>
            <Text style={{ fontSize: 12, fontWeight: "700" }}>
              {section.title}
            </Text>
          </View>
        )}
      />
      <View>
        <Text style={styles.separador}></Text>
      </View>
      <View style={styles.tallas}>
        <View>
          <Text style={{ fontSize: 15, fontWeight: "700" }}>Tallas</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={isSelectedXS}
            onValueChange={setSelectionXS}
            style={styles.checkbox}
          />
          <Text style={styles.label}>XS</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={isSelectedS}
            onValueChange={setSelectionS}
            style={styles.checkbox}
          />
          <Text style={styles.label}>S</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={isSelectedM}
            onValueChange={setSelectionM}
            style={styles.checkbox}
          />
          <Text style={styles.label}>M</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={isSelectedL}
            onValueChange={setSelectionL}
            style={styles.checkbox}
          />
          <Text style={styles.label}>L</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: 120,
    height: 570,
    marginTop: 20,
    marginLeft: 8,
  },
  sectionTitle: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "700",
    paddingTop: 15,
  },
  titulo: {
    margin: 5,
    alignItems: "center",
  },
  item: {
    width: "100%",
    height: 20,
    alignItems: "flex-end",
  },
  separador: {
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    borderStyle: "solid",
    marginRight: 8,
    marginLeft: 8,
  },
  tallas: {
    marginBottom: 2,
    marginLeft: 15,
  },
  checkboxContainer: {
    flexDirection: "row",
    margin: 5,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    fontSize: 13,
    margin: 5,
  },
});
export default Categorias;