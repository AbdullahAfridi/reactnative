import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";

const CoronaComponents = (props) => {
  let NewT = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    NewT = TouchableNativeFeedback;
  }
  return (
    <View style={{ backgroundColor: "#fff" }}>
      <View style={styles.product}>
        <View style={styles.touchm}>
          <NewT onPress={props.onViewDetials} useForeground>
            <View>
              <View style={styles.imageCon}>
                <Image style={styles.image} source={{ uri: props.image }} />
              </View>
              <View style={styles.detials}>
                <Text style={styles.title}> {props.title} </Text>
                <Text style={styles.price}> {props.price}</Text>
              </View>

              <View style={styles.actions}>
                <Button
                  title=" View Detials"
                  onPress={props.onViewDetials}
                  color="grey"
                />
              </View>
            </View>
          </NewT>
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
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    height: 300,
    margin: 20,
    flex: 1,
    overflow: "hidden",
  },
  touchm: {
    borderRadius: 10,
    overflow: "hidden",
  },
  imageCon: {
    width: "100%",
    height: "60%",
    borderTopLeftRadius: 10,
    borderTopLeftRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 18,
    marginVertical: 4,
  },
  price: {
    fontSize: 14,
    color: "#888",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "25%",
  },
  detials: {
    alignItems: "center",
    height: "15%",
    padding: 10,
  },
});

export default CoronaComponents;
