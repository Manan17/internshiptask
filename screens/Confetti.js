import { Button, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import ConfettiCannon from "react-native-confetti-cannon";
const Confetti = () => {
  const [explosion, setExplosion] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setExplosion(true);
    }, 500);
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          height: 400,
          width: "100%",
        }}
      >
        {explosion ? (
          <ConfettiCannon
            explosionSpeed={350}
            count={200}
            origin={{ x: -10, y: 0 }}
          />
        ) : null}
        <Image
          source={{
            uri: "https://c4.wallpaperflare.com/wallpaper/253/949/277/anime-artwork-warrior-video-games-wallpaper-preview.jpg",
          }}
          style={{
            width: "100%",
            height: 300,
            marginTop: 400,
          }}
        />
      </View>
    </View>
  );
};

export default Confetti;

const styles = StyleSheet.create({});
