import {
  Image,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import HeaderComponent from "./HeaderComponent";
const RenderItem = ({ item }) => {
  if (item.type === "touchable") {
    let opacity;
    if (item.isToggle) {
      opacity = 0.2;
    } else {
      opacity = 1;
    }
    return (
      <View style={styles.fullContainer}>
        <TouchableOpacity
          onPress={() => {
            if (item.isToggle) {
              item.navigation.navigate("Confetti");
            }
          }}
          activeOpacity={opacity}
        >
          <HeaderComponent
            likes={item.numberOfLikes}
            username={item.username}
          />
          <Image
            source={{
              uri: item.imageUrl,
            }}
            style={{
              ...styles.image,
              height: 200,
            }}
          />
          <Text style={{ marginTop: 20 }}>{item.text}</Text>
          <Switch
            value={item.isToggle}
            onValueChange={() => item.toggleState({ task: !item.isToggle })}
          />
        </TouchableOpacity>
      </View>
    );
  } else if (item.type === "image") {
    return (
      <View style={styles.fullContainer}>
        <HeaderComponent likes={item.numberOfLikes} username={item.username} />
        <Image
          source={{
            uri: item.imageUrl,
          }}
          style={{
            ...styles.image,
            height: 300,
          }}
          resizeMode="cover"
        />
      </View>
    );
  } else {
    return (
      <View style={styles.fullContainer}>
        <HeaderComponent likes={item.numberOfLikes} username={item.username} />
        <Text style={styles.titleText}>{item.text}</Text>
        <View
          style={{ flexDirection: "row", alignSelf: "center", marginTop: 15 }}
        >
          <TouchableOpacity
            style={{ ...styles.button, backgroundColor: "lightgreen" }}
          >
            <Text style={styles.buttonText}>Buy</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...styles.button, backgroundColor: "red" }}
          >
            <Text style={styles.buttonText}>Wait</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};

export default RenderItem;

const styles = StyleSheet.create({
  fullContainer: {
    backgroundColor: "white",
    padding: 15,
    elevation: 3,
    marginBottom: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  headerContainer: {
    flexDirection: "row",
  },
  titleText: {
    fontSize: 28,
    alignSelf: "center",
    textAlign: "center",
    marginTop: 10,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginRight: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },

  image: {
    marginTop: 20,
    width: "100%",
    borderRadius: 10,
  },
});
