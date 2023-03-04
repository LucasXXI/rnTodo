import {StatusBar, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Teste from './src/components/teste';
import React from 'react';

const App = () => {
  return (
    <View>
      <StatusBar />
      <Text style={styles.textTest}>Bom dia!</Text>
      <Teste />
    </View>
  );
};

const styles = StyleSheet.create({
  textTest: {
    fontFamily: 'cochin',
    fontSize: 45,
  },
});

export default App;
