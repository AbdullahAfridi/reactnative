import React from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import productsReducer from "./corona/reducers/products";
import CoronaNavigator from "./navigation/CoronaNavigator";
import ProjectOverView from "./screen/ProjectOverView";
import FirstScreen from "./screen/FirstScreen";
import Welcome from "./screen/Welcome";
import { View } from "react-native";
import Test from "./screen/Test";
import SymptomScreen from "./screen/SymptomScreen";
import SplashScreen from "./screen/SplashScree";

const rootReducer = combineReducers({
  products: productsReducer,
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <CoronaNavigator />
    </Provider>
  );
}
