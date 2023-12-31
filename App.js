import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [active, setActive] = useState(0)

  const handleRegister = () => {
    //user
    if(active === 0){

      //admin
    }else if(active === 1){

    }
  }
  return (
    <View style={styles.container}>
     <TouchableOpacity onPress={() => setActive(0)}>
      <Text style={{color: active === 0 ? 'blue': '#C3C3C3'}}>User</Text>
     </TouchableOpacity>
     <TouchableOpacity onPress={() => setActive(1)}>
     <Text style={{color: active === 1 ? 'blue': '#C3C3C3'}}>Admin</Text>
     </TouchableOpacity>

     <View>
      <TextInput placeholder='name'/>
     </View>
     <View>
      <TextInput placeholder='password'/>
     </View>
     <View>
      <TouchableOpacity onPress={handleRegister}><Text>Register</Text></TouchableOpacity>
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
