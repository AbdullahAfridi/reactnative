import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ActivityIndicator,
} from "react-native";
const W = Dimensions.get("window").width;
type Props = {};
export default class SplashScreen extends Component<Props> {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.push("Update");
    }, 2000);
  }
  render() {
    return (
      <View style={{ backgroundColor: "#fff" }}>
        <View style={styles.m1}>
          <View>
            <Image
              style={styles.img1}
              source={require("../assets/virus.png")}
            />
          </View>
          <View style={styles.m2}>
            <Text style={styles.tx}> Sehat Medical Center </Text>
          </View>
          <View style={styles.m3}>
            <Text style={styles.tx1}>Our service is available for 24/7</Text>
          </View>
        </View>
        <View style={styles.m3}>
          <Image style={styles.img} source={require("../assets/seh.jpeg")} />
        </View>
        <View>
          <ActivityIndicator
            size="large"
            color="#157DEC"
            style={{ marginTop: -770, marginLeft: 40 }}
          />
        </View>
        <View style={styles.m3}>
          <Text style={{ marginTop: 300, marginLeft: 500 }}> Loading...</Text>
        </View>
        <View style={styles.m3}>
          <Image
            style={{
              width: 400,
              height: 300,
              marginRight: 30,
              marginTop: -2110,
            }}
            source={require("../assets/virus.png")}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  img1: {
    width: "100%",
    height: 100,
    marginLeft: 300,
    marginTop: -280,
  },
  m1: {
    position: "absolute",
    width: 1000,
    height: 1000,
    alignSelf: "center",
    backgroundColor: "#157DEC",
    top: -(930 - W / 2),
    borderRadius: 1000,
    overflow: "hidden",
  },
  m2: {
    alignContent: "center",
    alignSelf: "center",

    marginTop: 600,
  },
  m3: {
    alignContent: "center",
    alignSelf: "center",
    justifyContent: "center",
  },

  img: {
    width: 400,
    height: 400,
    color: "red",
    marginTop: 300,
  },
  tx: {
    marginTop: 230,
    fontSize: 27,
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#157DEC",
  },
  tx1: {
    marginTop: 5,
    marginLeft: 10,
    fontSize: 15,
    fontWeight: "bold",
    color: "yellow",
    backgroundColor: "#157DEC",
  },
});
