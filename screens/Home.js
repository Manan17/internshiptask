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
