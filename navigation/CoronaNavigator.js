import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { Platform } from "react-native";
import ProductDetialScreen from "../screen/ProductDetialScreen";
import ProjectOverView from "../screen/ProjectOverView";
import Test from "../screen/Test";
import FirstScreen from "../screen/FirstScreen";
import Welcome from "../screen/Welcome";
import Login from "../screen/Login";
import Chat from "../screen/Chat";
import Header from "../header/Header";
import React from "react";
import HomeScreen from "../screen/HomeScreen";
import SymptomScreen from "../screen/SymptomScreen";
import SplashScreen from "../screen/SplashScree";

const ProductsNavigator = createStackNavigator(
  {
    Starting: SplashScreen,
    Sarting: Welcome,
    Username: Login,
    Messanger: Chat,
    Symptomps: SymptomScreen,
    Update: HomeScreen,

    ProductDetial: ProductDetialScreen,
    Cleaning: ProjectOverView,
    Home: {
      screen: FirstScreen,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: () => <Header navigation={navigation} />,
        };
      },
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "rgba(0,0,0,0.3)",
      },
      headerTintColor: Platform.OS === "android" ? "black" : "#157DEC",
    },
  }
);

export default createAppContainer(ProductsNavigator);
