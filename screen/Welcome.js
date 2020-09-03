import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Button,
  Image,
  Alert,
  ActivityIndicator,
} from "react-native";
type Props = {};
export default class Welcome extends Component<Props> {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.push("Home");
    }, 2000);
  }

  render() {
    return (
      <ImageBackground
        source={require("../assets/mask.jpeg")}
        style={styles.img}
      >
        <Image source={require("../assets/back.jpeg")} style={styles.img2} />
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <View style={{}}>
            <ActivityIndicator
              size="large"
              color="yellow"
              style={{ marginBottom: 1250, marginLeft: 45 }}
            />
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
  Cont: {
    marginTop: 140,
    marginRight: 50,
  },
  but: {
    backgroundColor: "grey",
    borderRadius: 10,
  },
  txt1: {
    fontSize: 30,
    marginBottom: 710,
    marginLeft: 0,
    color: "white",
  },

  img2: {
    width: "100%",
    height: "95%",
    marginTop: 800,
    marginLeft: 15,
  },
  lod: {
    margin: 0,
  },
});
