import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
type props = {};
export default function Header({ navigation }) {
  const openMenu = () => {
    navigation.push("Username");
  };

  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity onPress={openMenu}>
          <FontAwesome5 name="rocketchat" size={30} color="#33AAFF" />
        </TouchableOpacity>
      </View>

      <View>
        <Text style={styles.headerText}> Home </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 130,
  },

  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "black",
    letterSpacing: 1,
    marginTop: -30,
    marginRight: -15,
  },
});
