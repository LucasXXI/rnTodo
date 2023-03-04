import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Teste = () => {
  return <Text style={styles.textinho}>Componente Funcional</Text>;
};

const styles = StyleSheet.create({
  textinho: {
    color: 'red',
    textAlign: 'center',
    fontSize: 25,

  },
});

export default Teste;
