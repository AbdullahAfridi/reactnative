import React, { Component } from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { View, Button } from "react-native";
type Props = {};
export default class Test extends Component<Props> {
  render() {
    return (
      <View>
        <Button title="press me" />
      </View>
    );
  }
}

//export default Test;
