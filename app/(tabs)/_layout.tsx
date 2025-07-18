import { Feather } from "@expo/vector-icons";
import { Image } from "expo-image";
import { router, Tabs } from "expo-router";
import type React from "react";
import { StyleSheet, TouchableHighlight } from "react-native";
import UserIconBtnComponent from "../../components/shared/user_icon_btn_component";
import { colors, fonts } from "../../constants/design_constants";

const TabsLayout = (): React.JSX.Element => {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: styles.tabBarStyle,
        tabBarLabelStyle: styles.tabBarLabelStyle,
        headerStyle: styles.headerStyle,
        headerTitleAlign: "center",
        headerTitle: () => (
          <Image
            source={require("../../assets/images/27839514-diaporama.png")}
            style={styles.headerTitle}
          />
        ),
        headerRight: () => <UserIconBtnComponent />,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarLabel: "",
          tabBarIcon: () => (
            <TouchableHighlight
              underlayColor={colors.ternary}
              style={styles.iconHomeBtn}
              onPress={() => router.navigate("/")}
            >
              <Image
                source={require("../../assets/images/img-w1200-h628-dc010101.png")}
                style={styles.iconHomeImgBtn}
              />
            </TouchableHighlight>
          ),
        }}
      />
      <Tabs.Screen
        name="programmation"
        options={{
          tabBarLabel: "Prog",
          tabBarIcon: () => (
            <Feather name="music" style={styles.tabBarIconStyle} />
          ),
        }}
      />
      <Tabs.Screen
        name="plan"
        options={{
          tabBarLabel: "Plan",
          tabBarIcon: () => (
            <Feather name="map" style={styles.tabBarIconStyle} />
          ),
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          tabBarLabel: "Menu",
          tabBarIcon: () => (
            <Feather name="menu" style={styles.tabBarIconStyle} />
          ),
        }}
      />
      <Tabs.Screen
        name="(drawer)"
        options={{
          tabBarLabel: "Billets",
          tabBarIcon: () => (
            <Feather name="activity" style={styles.tabBarIconStyle} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: colors.secondary,
  },
  headerTitle: {
    width: 95,
    height: 40,
  },
  tabBarStyle: {
    backgroundColor: colors.secondary,
  },
  tabBarLabelStyle: {
    fontFamily: fonts.body,
    fontSize: 12,
    color: "rgba(255 255 255 / 1)",
  },
  tabBarIconStyle: {
    color: "rgba(255 255 255 / 1)",
    fontSize: 25,
  },
  iconHomeBtn: {
    width: 65,
    height: 65,
    borderRadius: 999,
    backgroundColor: colors.ternary,
    justifyContent: "center",
    alignItems: "center",
    top: -20,
  },
  iconHomeImgBtn: {
    width: 35,
    height: 30,
  },
});