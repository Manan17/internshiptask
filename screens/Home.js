import {
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Switch,
} from "react-native";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { toggleState } from "../redux/toggleSlice";
import { AntDesign } from "@expo/vector-icons";
import RenderItem from "../components/RenderItem";
import HeaderComponent from "../components/HeaderComponent";

const renderItem = ({ item }) => {
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

const Home = ({ isToggle, toggleState, navigation }) => {
  const data = [
    {
      id: 1,
      type: "touchable",
      imageUrl: "https://wallpaperaccess.com/full/1637842.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ullamcorper nulla sollicitudin enim dignissim, eget pharetra risus tempus.",
      username: "Manan",
      numberOfLikes: 33,
      navigation,
      isToggle,
      toggleState,
    },
    {
      id: 2,
      type: "image",
      imageUrl: "https://wallpapercave.com/wp/wp2048432.jpg",
      username: "Debapriyo",
      numberOfLikes: 43,
    },
    {
      id: 3,
      type: "text",
      text: "Should I 'BUY' BTC at $55",
      username: "Elon Musk",
      numberOfLikes: 73,
    },
  ];

  return (
    <View style={styles.mainContainer}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <FlatList
        data={data}
        renderItem={RenderItem}
        keyExtractor={(item) => item.id}
        scrollEnabled
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const mapStateToProps = (state, myOwnProps) => {
  return {
    isToggle: state.toggle.isToggle,
  };
};

const mapDispatchToProps = {
  toggleState,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
  mainContainer: {
    padding: 15,
  },
});
