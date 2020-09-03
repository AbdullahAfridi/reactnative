import React from "react";
import { StyleSheet, Image, Dimensions, ScrollView } from "react-native";
import Block from "./Block";
import { Feather } from "@expo/vector-icons";
import Button from "./Button";
import TextView from "./TextView";
import { AntDesign } from "@expo/vector-icons";
const W = Dimensions.get("window").width;

const HomeScreen = (props) => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <Block block color="#f1f1f1">
        <Block height={300} color="#157DEC" style={styles.blg} />
        <Block height={270} style={styles.imgH}>
          <Image
            style={styles.doc}
            source={require("../assets/Drcorona.png")}
          />
        </Block>
        <Block>
          <Image style={styles.img} source={require("../assets/virus.png")} />
        </Block>
        <Block>
          <Button
            color="#fff"
            borderWidth={1}
            borderColor="#f0f0f0"
            margin={10}
            borderRadius={30}
          >
            <Block direction="row" paddingHorizontal={15} middle>
              <Feather name="map-pin" size={17} padding={10} color="darkblue" />
              <Block black padding={10}>
                <TextView h6> Sri Lanka </TextView>
              </Block>
              <AntDesign
                name="down"
                color="black"
                style={{ marginLeft: 210 }}
              />
            </Block>
          </Button>
        </Block>
        <Block padding={10} tyle={{ marginTop: 10 }}>
          <Block padding={10} justifyContent="space-between" direction="row">
            <Block padding={10}>
              <TextView h6>Case Update </TextView>
              <TextView> Newest Update </TextView>
            </Block>
            <Button
              textColor="#157DEC"
              onPress={() => {
                props.navigation.push("Symptomps");
              }}
            >
              See Detials
            </Button>
          </Block>
          <Block
            color="#fff"
            padding={10}
            borderRadius={8}
            shadow
            style={{ marginTop: 10 }}
            direction="row"
          >
            <Block block>
              <Block middle>
                <Block
                  width={30}
                  height={30}
                  color="#F5F5F5"
                  middle
                  centered
                  borderRadius={20}
                >
                  <Block
                    width={20}
                    height={20}
                    borderWidth={4}
                    borderRadius={20}
                    borderColor="#FF8000"
                  />
                </Block>
                <TextView padding={12} color="#FF8000" h2>
                  1500
                </TextView>
                <TextView color="gray" h6>
                  Infected
                </TextView>
              </Block>
            </Block>
            <Block block>
              <Block middle>
                <Block
                  width={30}
                  height={30}
                  color="#F5F5F5"
                  middle
                  centered
                  borderRadius={20}
                >
                  <Block
                    width={20}
                    height={20}
                    borderWidth={4}
                    borderRadius={20}
                    borderColor="#FF1E1E"
                  />
                </Block>
                <TextView padding={12} color="#FF1E1E" h2>
                  10
                </TextView>
                <TextView color="gray" h6>
                  Deaths
                </TextView>
              </Block>
            </Block>
            <Block block>
              <Block middle>
                <Block
                  width={30}
                  height={30}
                  color="#F5F5F5"
                  middle
                  centered
                  borderRadius={20}
                >
                  <Block
                    width={20}
                    height={20}
                    borderWidth={4}
                    borderRadius={20}
                    borderColor="green"
                  />
                </Block>
                <TextView padding={12} color="green" h2>
                  150
                </TextView>
                <TextView color="gray" h6>
                  Recovered
                </TextView>
              </Block>
            </Block>
          </Block>
          <Block padding={10} style={{ marginTop: 10 }}>
            <Block direction="row" justifyContent="space-between">
              <TextView h6>Spread Of Viruse</TextView>
              <Button textColor="#157DEC"> See Details </Button>
            </Block>
            <Block style={styles.map}>
              <Image source={require("../assets/map.png")} />
            </Block>
          </Block>
        </Block>
      </Block>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  map: {
    borderRadius: 8,
    marginTop: 15,
    padding: 15,
  },
  img: {
    width: "100%",
    height: 300,
    marginTop: -280,
  },
  blg: {
    position: "absolute",
    width: 1000,
    height: 1000,
    alignSelf: "center",

    top: -(930 - W / 2),
    borderRadius: 1000,
    overflow: "hidden",
  },
  doc: {
    position: "absolute",
    top: 50,
    left: 40,
    marginTop: 10,

    width: "37%",
    height: "115%",
    marginLeft: 35,
  },
  imgH: {
    overflow: "hidden",
    position: "relative",
  },
});

export default HomeScreen;
