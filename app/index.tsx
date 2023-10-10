import { Stack } from "expo-router";
import { useState } from "react";
import { View } from "react-native";
import Constants from "expo-constants";

export default function Index() {
  // FIXME: how to get navigation header height ???
  const [headerHeight, setHeaderHeight] = useState(64);
  const statusBarHeight = Constants.statusBarHeight;

  return (
    <>
      <Stack.Screen options={{ headerShown: true, headerTransparent: true }} />
      {/* for immersive background */}
      <View
        style={{
          backgroundColor: "lightblue",
          width: "100%",
          height: "100%",
          paddingTop: statusBarHeight + headerHeight, // for showing content right below navigation header
        }}
      >
        {/* main content to show */}
        <View
          style={{ backgroundColor: "grey", width: "100%", height: "100%" }}
        ></View>
      </View>
    </>
  );
}
