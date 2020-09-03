import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { Platform } from "react-native";
import ProductDetialScreen from "../screen/ProductDetialScreen";
import ProjectOverView from "../MainScreen/ProjectOverView";
import Test from "../screen/Test";
import FirstScreen from "../screen/FirstScreen";
import Welcome from "../screen/Welcome";
import Login from "../screen/Login";
import Chat from "../screen/Chat";
import Header from "../header/Header";
import React from "react";

const UserName = createStackNavigator(
  {
    Username: {
      screen: Login,
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
        backgroundColor: "rgba(0,0,0,0.9)",
      },
      headerTintColor: Platform.OS === "android" ? "black" : "orange",
    },
  }
);

export default createAppContainer(UserName);
