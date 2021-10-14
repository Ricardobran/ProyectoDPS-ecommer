import React from "react";
import { StyleSheet, View, Text, Image, SafeAreaView, Button, Alert } from "react-native";


const itemProducto = () => {

  return (
    <SafeAreaView style={styles.container}>

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
          <Text style={{ fontSize: 20, fontWeight: "400", marginLeft: 15, textAlign: 'center' }}>Hermosa camisa con estampado Red Devils </Text>
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
    backgroundColor: '#fff'
  },
  itemContainer4: {
    width: 50,
    height: 50,
    marginTop: 0,
    marginLeft: 105,
    backgroundColor: '#fff',
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
});
 export default itemProducto;
