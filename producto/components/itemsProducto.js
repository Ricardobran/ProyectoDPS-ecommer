import React from "react";
import { StyleSheet, View, Text, Image, SafeAreaView, Button, Alert } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const itemProducto = () => {

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 24, fontWeight: "700", textAlign: 'center', marginTop: 15}}>Camisa Red Devils</Text>
      <View style={styles.itemContainer}>
        <View style={styles.item}>
          <Image source={require("../imgs/camisa1.jpg")} style={styles.img} />
          <View style={styles.itemContainer2}>
            <View style={styles.itemContainer3}>
              <View style={styles.itemContainer4}>
              </View>
            </View>
          </View>
        </View>
          <Text style={{ fontSize: 24, fontWeight: "700", marginTop: 60, textAlign: 'center'}}>Camisa #1</Text>
          <Text style={{ fontSize: 20, fontWeight: "400", marginLeft: 15, textAlign: 'center' }}>Camisa cálida de la marca Red Devils para hombre, manga corta de alta calidad, ideal para verano, nuevo 2021</Text>
          <View style={styles.rate}>
              <FontAwesome
                style={styles.star}
                name="star"
                size={18}
                color="yellow"
              />
              <FontAwesome
                style={styles.star}
                name="star"
                size={18}
                color="yellow"
              />
              <FontAwesome
                style={styles.star}
                name="star"
                size={18}
                color="yellow"
              />
              <FontAwesome
                style={styles.star}
                name="star"
                size={18}
                color="yellow"
              />
              <FontAwesome
                style={styles.star}
                name="star"
                size={18}
                color="yellow"
              />
            </View>
          <Button title="Buy Now" color="#454545" onPress={() => Alert.alert('Comprar ahora')} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    width: '100%',
    height: "80%",
    marginTop: 10,
    
    alignItems: 'center'
  },
  itemContainer2: {
    width: 50,
    height: 50,
    marginTop: 35,
    marginLeft: 0,
    backgroundColor: '#FFF'
  },
  itemContainer3: {
    width: 50,
    height: 50,
    marginTop: 0,
    marginLeft: 105,
    backgroundColor: '#000'
  },
  itemContainer4: {
    width: 50,
    height: 50,
    marginTop: 0,
    marginLeft: 105,
    backgroundColor: 'red',
  },
  item: {
    backgroundColor: "#fff",
    width: 250,
    height: 250,
    marginTop: 40,
  },
  img: {
    width: 200,
    height: 200,
    marginTop: 25,
    marginLeft: 25,
    marginRight: 20,
  },
  rate: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
  },
  star: {
    marginTop: 3,
    marginLeft: 2.5,
    marginRight: 2.5,
  },
});
 export default itemProducto;
