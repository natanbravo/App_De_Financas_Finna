import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MotiView, MotiText } from "moti";

const statusBarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight + 22
  : 64;

export default function Header({ name }) {
  return (
    <SafeAreaView>
      <MotiView
        style={styles.headerContainer}
        from={{
          translateY: -150,
          opacity: 0,
        }}
        animate={{
          translateY: 0,
          opacity: 1,
        }}
        transition={{
          type: "timing",
          duration: 700,
          delay: 200,
        }}
      >
        <StatusBar backgroundColor={"#020f43"} />
        <View style={styles.headerContent}>
          <MotiText
            style={styles.userName}
            from={{
              translateX: -350,
              opacity: 0,
            }}
            animate={{
              translateX: 0,
              opacity: 1,
            }}
            transition={{
              type: "spring",
              duration: 400,
              delay: 850,
            }}
          >
            Olá, {name}
          </MotiText>
          <TouchableOpacity activeOpacity={0.9} style={styles.userButton}>
            <Ionicons name="person-outline" size={32} color="#020a46" />
          </TouchableOpacity>
        </View>
      </MotiView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#020a46",
    paddingTop: statusBarHeight,
    flexDirection: "row",
    paddingStart: 16,
    paddingEnd: 16,
    paddingBottom: 60,
    paddingTop: 25,
  },
  headerContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  userName: {
    color: "#f40046",
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 0,
  },
  userButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f40046",
    width: 44,
    height: 44,
    borderRadius: 44 / 2,
    opacity: 0.9,
  },
});

// #0040b8 azul
// #eac8af bege
// #1b2021 preto esverdeado
