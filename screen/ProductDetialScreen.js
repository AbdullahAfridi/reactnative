import React from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  Button,
  StyleSheet,
} from "react-native";
import { useSelector } from "react-redux";
import { createAppContainer } from "react-navigation";

const ProductDetialScreen = (props) => {
  const productId = props.navigation.getParam("productId");
  const selectedProduct = useSelector((state) =>
    state.products.availableProducts.find((prod) => prod.id === productId)
  );
  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: selectedProduct.imageURL }} />
      <Text style={styles.price}>{selectedProduct.price}</Text>
      <Text style={styles.des}> {selectedProduct.description}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    fontSize: 20,
    color: "#888",
    textAlign: "center",
    marginVertical: 20,
  },
  des: {
    fontSize: 14,
    textAlign: "center",
    marginHorizontal: 20,
  },
});

export default createAppContainer(ProductDetialScreen);
