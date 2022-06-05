import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Actions() {
  return (
    <ScrollView
      style={styles.actionContainer}
      horizontal={true}
      showsVerticalScrollIndicator={false}
    >
      <TouchableOpacity style={styles.actionButtonContainer}>
        <View style={styles.button}>
          <AntDesign name="plus" size={28} color="#020f43" />
        </View>
        <Text style={styles.buttonText}>Add Receitas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButtonContainer}>
        <View style={styles.button}>
          <AntDesign name="minus" size={28} color="#020f43" />
        </View>
        <Text style={styles.buttonText}>Add Despesas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButtonContainer}>
        <View style={styles.button}>
          <AntDesign name="calendar" size={28} color="#020f43" />
        </View>
        <Text style={styles.buttonText}>Calendário</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButtonContainer}>
        <View style={styles.button}>
          <AntDesign name="piechart" size={28} color="#020f43" />
        </View>
        <Text style={styles.buttonText}>Gráficos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButtonContainer}>
        <View style={styles.button}>
          <AntDesign name="adduser" size={28} color="#020f43" />
        </View>
        <Text style={styles.buttonText}>Add Despesas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButtonContainer}>
        <View style={styles.button}>
          <AntDesign name="calendar" size={28} color="#020f43" />
        </View>
        <Text style={styles.buttonText}>Calendário</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  actionContainer: {
    flex: 1,
    marginTop: 25,
    marginBottom: 15,
    paddingStart: 16,
    paddingEnd: 16,
    maxHeight: 84,
  },
  actionButtonContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 7,
    paddingRight: 7
  },
  button: {
    backgroundColor:'#610099',
    width: 50,
    height: 50,
    borderRadius: 50/2,
    alignItems: "center",
    justifyContent: 'center'

  },
  buttonText: {
    color: "#e5e5e5",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: 'center'

  },
});
