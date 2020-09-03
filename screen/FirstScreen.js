import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";

const FirstScreen = (props) => {
  return (
    <View style={styles.main1}>
      <View style={styles.product}>
        <Image style={styles.image} source={require("../assets/cov.jpg")} />

        <Text style={styles.title}> Stay Home Stay Safe! </Text>
        <Text style={styles.price}> Me </Text>
      </View>

      <View style={{ flex: 1 }}>
        <View style={styles.sub1}>
          <View style={styles.sub2}>
            <TouchableOpacity
              onPress={() => {
                props.navigation.push("Cleaning");
              }}
            >
              <Text style={styles.tx3}> Covid19 General Awareness </Text>

              <AntDesign
                name="earth"
                size={36}
                color="#157DEC"
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.sub3}>
            <Text style={styles.tx3}> Covid19 Update </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  product: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 5,
    backgroundColor: "white",
    width: "95%",
    height: "50%",
    marginTop: 4,
    marginRight: 50,
    marginLeft: 10,

    overflow: "hidden",
  },
  sub1: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 8,
    borderRadius: 5,
    backgroundColor: "#DBFF33",
    width: "95%",
    height: "40%",
    marginTop: 7,
    marginRight: 50,
    marginLeft: 10,
    flex: 2,

    overflow: "hidden",
  },
  sub2: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 8,
    borderRadius: 5,
    backgroundColor: "#DC381F",
    width: "95%",
    height: "16%",
    marginTop: 7,
    marginRight: 50,
    marginLeft: 10,

    overflow: "hidden",
  },
  sub3: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 8,
    borderRadius: 5,
    backgroundColor: "#F87217",
    width: "95%",
    height: "16%",
    marginTop: 14,
    marginRight: 50,
    marginLeft: 10,

    overflow: "hidden",
  },

  main1: {
    flex: 1,
    backgroundColor: "#97FF33",
  },
  touchm: {
    borderRadius: 10,
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: "80%",
  },
  title: {
    fontSize: 18,
    marginVertical: 4,
    fontWeight: "bold",
  },

  detials: {
    alignItems: "center",
    height: "15%",
    padding: 10,
  },
  tx3: {
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 10,
    padding: 7,
    color: "white",
  },
  icon: {
    marginLeft: 320,
    marginTop: -35,
  },
});

export default FirstScreen;
