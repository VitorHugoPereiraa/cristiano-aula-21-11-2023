import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {

  const handleLogin = () => {

    //Buscar user no firebase e verificar se o type é 0 ou 1 sabendo assim se é admin ou não
    //user
    if(active === 0){

      //admin
    }else if(active === 1){

    }
  }
  return (
    <View style={styles.container}>
     <View>
      <TextInput placeholder='name'/>
     </View>
     <View>
      <TextInput placeholder='password'/>
     </View>
     <View>
      <TouchableOpacity onPress={handleLogin}><Text>Login</Text></TouchableOpacity>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
