import React from "react";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";
import CoronaComponents from "../component/CoronaComponents";

const ProjectOverView = (props) => {
  const products = useSelector((state) => state.products.availableProducts);
  return (
    <FlatList
      numColumns={1}
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <CoronaComponents
          image={itemData.item.imageURL}
          title={itemData.item.title}
          price={itemData.item.price}
          onViewDetials={() => {
            props.navigation.navigate("ProductDetial", {
              productId: itemData.item.id,
            });
          }}
        />
      )}
    />
  );
};

ProjectOverView.navigationOptions = {
  headerTitle: "All Products",
};

export default ProjectOverView;
