import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Header from "../../Header";
import Balance from "../../Balance";
import Movements from "../../Movements";
import Actions from "../../Actions";
import { MotiText, MotiView } from "moti";

const list = [
  {
    id: 1,
    label: "Conta de água",
    value: "282,34",
    date: "22/05/2022",
    type: 0,
  },
  {
    id: 2,
    label: "Salário",
    value: "5.212,56",
    date: "15/05/2022",
    type: 1,
  },
  {
    id: 3,
    label: "Parcela do carro",
    value: "1089,34",
    date: "22/05/2022",
    type: 0,
  },
];

export default function Home() {
  return (
    <View style={styles.homeContainer}>
      <Header name={"Elizangela Mendes"} />
      <Balance saldo="29.342,20" gastos="543,45" />
      <Actions/>
      <MotiText style={styles.homeTextContainer}
      from={{
          translateX: -350,
          opacity: 0
      }}
      animate={{
        translateX:0,
        opacity: 1
    }}
      transition={{
        duration: 700,
        delay: 340
      }}
      >Ultimas movimentações
      </MotiText>

      <MotiView 
         from={{
          translateX: 750,
          opacity: 0
      }}
      animate={{
        translateX:0,
        opacity: 1
    }}
      transition={{
        duration: 700,
        delay: 740
      }} >
      <FlatList 
      style={styles.listContainer}
      data={list}
      keyExtractor={(item) => String(item.id)}
      showsVerticalScrollIndicator={false}
      renderItem={({item})=> <Movements data={item} style={styles.dataContainer} />}
       />
      </MotiView>
     
    </View>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: "#020f43",
    flex: 1,
  },
  homeTextContainer: {
    color: "#f40046",
    fontWeight: "bold",
    fontSize: 20,
    margin: 16,
  },
  listContainer: {
    marginStart: 14,
    marginEnd: 14,
  },
  dataContainer:{
    color: 'red'
  },
});
