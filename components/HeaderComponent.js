import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
const HeaderComponent = ({ likes, username }) => {
  return (
    <View style={styles.headerContainer}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={{
            uri: "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
          }}
          style={styles.profileImage}
        />
        <Text style={{ marginLeft: 15 }}>{username}</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <AntDesign name="heart" size={20} color="red" />
        <Text style={{ marginLeft: 5 }}>{likes}</Text>
      </View>
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
