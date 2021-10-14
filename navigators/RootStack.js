import React, { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
//colors
import { Colors } from './../components/styles';
const { darkLight, brand, primary, tertiary, secondary } = Colors;
import { FontAwesome } from "@expo/vector-icons";
import { SafeAreaView } from "react-native";
import { StyleSheet, View, Text, Pressable } from "react-native";
// React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from "@react-navigation/drawer";
// screens
import Login from './../screens/Login';
import Signup from './../screens/Signup';
import Welcome from './../screens/Welcome';
import Home from './../screens/Home';
import Logout from './../screens/Logout';
// credentials context
import { CredentialsContext } from './../components/CredentialsContext';
import  Splash  from './../components/splash';
import AsyncStorage from '@react-native-async-storage/async-storage';
// keyboard avoiding view
import KeyboardAvoidingWrapper from './../components/KeyboardAvoidingWrapper';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


function Drawers() {
  return (
    <>
     
      <Drawer.Navigator 
          initialRouteName="Home" 
          screenOptions={{
          headerTitleAlign: "center",
          drawerStyle:{
            backgroundColor: 'white',
            width: 240
          },
          headerStyle:{
            height:60
          }
          }} 
          >

        <Drawer.Screen name="Home" component={Home} options={{
            drawerIcon: () => (
              <FontAwesome name="home" size={24} color="black" />
            ),
          }}/>
          <Drawer.Screen name="Logout" component={Logout} options={{
            drawerIcon: () => (
              <FontAwesome name="sign-out" size={24} color="black" />
            ),
          }}/>
      </Drawer.Navigator>
    </>
  );
}

function Splashs(){
  return(
      setTimeout(()=>{
                  <Splash/>
                },5000)
    );
}

const RootStack = () => {
  return (
    <CredentialsContext.Consumer>
      {({ storedCredentials }) => (
        <NavigationContainer style={{ backgroundColor: 'red' }}>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: 'transparent',

              },
              
              headerTransparent: true,
              headerTitle: '',
              headerLeftContainerStyle: {
                paddingLeft: 20,
              },
            }}
          >
            {storedCredentials ? (
              
              <Stack.Screen
                options={{
                  headerTintColor:primary,
                }}
                name="Drawers"
                component={Drawers}
              />

            ) : (
              <>
                
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Signup" component={Signup} />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </CredentialsContext.Consumer>
  );
};

export default RootStack;
