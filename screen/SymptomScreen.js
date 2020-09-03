import React from "react";
import { StyleSheet, Image, Dimensions, ScrollView } from "react-native";
import Block from "./Block";
import Button from "./Button";
import TextView from "./TextView";
const W = Dimensions.get("window").width;

const SymptomScreen = (props) => {
  return (
    <ScrollView>
      <Block block color="#f1f1f1">
        <Block height={300} color="#157DEC" style={styles.blg} />
        <Block height={270} style={styles.imgH}>
          <Image
            style={styles.doc}
            source={require("../assets/coronadr.png")}
          />
        </Block>
        <Block>
          <Image style={styles.img} source={require("../assets/virus.png")} />
        </Block>
        <Block>
          <TextView h5 style={{ marginBottom: 8, marginLeft: 9 }}>
            Symptomps
          </TextView>
          <Block direction="row" paddingVertical={10}>
            <Block block middle marginTop={1} width={10}>
              <Button
                shadow
                color="#fff"
                borderRadius={12}
                padding={10}
                padding={10}
                onPress={() => {
                  props.navigation.navigate("Home");
                }}
              >
                <Image source={require("../assets/headache.png")} />
                <TextView bold center>
                  Headache
                </TextView>
              </Button>
            </Block>
            <Block block middle marginTop={1} width={20}>
              <Button shadow color="#fff" borderRadius={12} padding={10}>
                <Image source={require("../assets/caugh.png")} />
                <TextView bold center>
                  Caugh
                </TextView>
              </Button>
            </Block>

            <Block block middle marginTop={1} width={10}>
              <Button shadow color="#fff" borderRadius={12} padding={10}>
                <Image source={require("../assets/fever.png")} />
                <TextView bold center>
                  Fever
                </TextView>
              </Button>
            </Block>
          </Block>
        </Block>
        <Block padding={10}>
          <TextView h5> Prevention</TextView>
          <Block borderRadius={20} color="#fff" height={175} width={390}>
            <Block block marginTop={2} marginLeft={16}>
              <Image source={require("../assets/wear_mask.png")} />

              <TextView
                size={16}
                bold
                style={{ marginLeft: 180, marginTop: -143 }}
              >
                Wear Face Mask
              </TextView>
              <TextView
                size={14}
                style={{ marginLeft: 180, maxWidth: (2 * W) / 3.4 }}
              >
                Since the start of covid19 outbreak doctors have recomended to
                wear face mask in public places.So it can possible prevent or
                slow the spead of coronavirus.
              </TextView>
            </Block>
          </Block>

          <Block
            borderRadius={20}
            color="#fff"
            height={160}
            width={390}
            marginTop={7}
          >
            <Block block marginTop={2} marginLeft={16}>
              <Image source={require("../assets/wash_hands.png")} />

              <TextView
                size={16}
                bold
                style={{ marginLeft: 180, marginTop: -143 }}
              >
                Wash Your Hands
              </TextView>
              <TextView
                size={14}
                style={{ marginLeft: 180, maxWidth: (2 * W) / 3.4 }}
              >
                We should avoid handshake with anybody and doctors have
                suggested us to wash our hands consistently specially when we
                make contact with any object.
              </TextView>
            </Block>
          </Block>
        </Block>
      </Block>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
    marginTop: 15,

    width: "37%",
    height: "115%",
    marginLeft: 35,
  },
  imgH: {
    overflow: "hidden",
    position: "relative",
    marginTop: 6,
  },
});

export default SymptomScreen;
