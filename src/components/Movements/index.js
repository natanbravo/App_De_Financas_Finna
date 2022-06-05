import React, {useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";


export default function Movements({ data }) {

    const [showValue, setShowvalue] = useState(false);


  return (
    <TouchableOpacity style={styles.movementsContainer} onPress={() => setShowvalue(!showValue)} >
      <Text style={styles.dateContainer}>{data.date}</Text>

      <View style={styles.contentContainer}>
        <Text style={styles.labelContainer}>{data.label}</Text>
        {showValue ? (
            <Text
            style={
              data.type === 1 ? styles.valueContainer : styles.expensesContainer
            }
          >
            {data.type === 1 ? `R$ ${data.value}` : `R$ -${data.value}`}
          </Text>
        ) : (
            <View style={styles.skeletonContainer} ></View>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  movementsContainer: {
    flex: 1,
    marginTop: 12,
    marginBottom: 12,
    padding: 10,
    backgroundColor: "#053f5e",
    width: "100%",
    height: 80,
    borderRadius: 15 / 2,
  },
  dateContainer: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#bbb",
  },
  contentContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  labelContainer: {
    fontWeight: "bold",
    fontSize: 16,
    letterSpacing: 1.3,
    marginTop: 5,
    marginBottom:5,
    color: "#fff",
  },
  valueContainer: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#2ecc75",
  },
  expensesContainer: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#e73c3c",
  },
  skeletonContainer:{
      marginTop: 6,
      backgroundColor: '#155a7e',
      width: 100,
      height: 20,
      borderRadius: 50/2
  },
});
