import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default class Login extends Component {
  state = {
    name: "",
  };

  continue = () => {
    this.props.navigation.navigate("Messanger", { name: this.state.name });
  };

  render() {
    return (
      <View style={styles.cont}>
        <View style={styles.circle} />
        <View style={{ marginTop: 64 }}>
          <Image
            source={require("../assets/chat.png")}
            style={{ width: 100, height: 100, alignSelf: "center" }}
          />
        </View>
        <View style={{ marginHorizontal: 32 }}>
          <Text style={styles.header}> Username </Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Your Username Here"
            onChangeText={(name) => {
              this.setState({ name });
            }}
            value={this.state.name}
          />
          <View
            style={{ alignItems: "flex-end", marginTop: 64, marginRight: 580 }}
          >
            <TouchableOpacity style={styles.continue} onPress={this.continue}>
              <AntDesign name="forward" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    backgroundColor: "#157DEC",
    height: 1000,
    width: 1000,
    borderBottomLeftRadius: 510,
    borderBottomRightRadius: 200,
  },
  circle: {
    width: 500,
    height: 500,
    borderRadius: 500 / 2,
    backgroundColor: "#FFF",
    position: "absolute",
    left: -92,
    top: 8,
  },
  header: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#514E5A",
    marginTop: 32,
  },
  input: {
    marginTop: 32,
    height: 50,
    borderWidth: StyleSheet.hairlineWidth,

    borderColor: "#BAB7C3",
    paddingHorizontal: 18,
    color: "#514E5A",
    fontWeight: "600",
    borderRadius: 30,
  },
  continue: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    backgroundColor: "#9075E3",
    alignItems: "center",
    justifyContent: "center",
  },
});
