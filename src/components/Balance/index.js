import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { MotiView } from 'moti';

export default function Balance( {saldo, gastos}) {

  const [showBalance, setShowBalance] = useState(false);
  const [showExpenses, setShowExpenses] = useState(false);


  return (
    <>
      <MotiView 
      
      from={{
          translateX: -750,
          opacity: 0
      }}
      animate={{
        translateX:0,
        opacity: 1
    }}
      transition={{
        duration: 700,
        delay: 740
      }} style={styles.wrapperContainer}>

     
        <TouchableOpacity onPress={() => setShowBalance(!showBalance)} style={styles.balanceContainer}>
        <Text style={styles.balanceTitleContainer}>Saldo</Text>

            {showBalance ? (
            <>
              <View style={styles.itemContainer}  >
                 <Text style={styles.currencyContainer}>R$</Text>
                 <Text style={styles.moneyBalanceContainer}> {saldo} </Text>
             </View>
            </>
            ):(
              <View style={styles.skeletonContainer}></View>
            )}
        </TouchableOpacity>




        <TouchableOpacity onPress={() => setShowExpenses(!showExpenses)} style={styles.expensesContainer}>
        <Text style={styles.expensesTitleContainer}>Gastos</Text>
         {showExpenses ? (
            <>
            <View style={styles.itemContainer}>
              <Text style={styles.currencyContainer}>R$</Text>
              <Text style={styles.moneyExpenseContainer}> - {gastos}</Text>
            </View></>
         ) : (
          <View style={styles.skeletonContainer}></View>
         )}
        </TouchableOpacity>




      </MotiView>
    </>
  );
}

const styles = StyleSheet.create({
  wrapperContainer: {
    backgroundColor: '#053f5e',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingStart: 16,
    paddingEnd: 16,
    marginTop: -30,
    marginStart: 14,
    marginEnd: 14,
    borderRadius: 5,
    paddingTop: 25,
    paddingBottom: 25,
    zIndex: 99
  },
  itemContainer:{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
  },
  balanceTitleContainer:{
    color: '#ccc',
    fontWeight: 'bold',
    fontSize: 20,
  },
  expensesTitleContainer:{
    color: '#ccc',
    fontWeight: 'bold',
    fontSize: 20
  },
  currencyContainer:{
    color: '#ccc',
    fontWeight: 'bold',
    fontSize: 15,
  },
  moneyBalanceContainer:{
    color: '#2ecc75',
    fontWeight: 'bold',
    fontSize: 20
  },
  moneyExpenseContainer:{
    color: '#FF0000',
    fontWeight: 'bold',
    fontSize: 20
  },
  skeletonContainer:{
    marginTop: 6,
    backgroundColor: '#155a7e',
    width: 100,
    height: 20,
    borderRadius: 50/2
},
});
