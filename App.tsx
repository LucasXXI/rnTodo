import {
  SafeAreaView
} from 'react-native';
import React from 'react';
import TodoList from './src/screens/Todos';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <TodoList />
    </SafeAreaView>
  );
};

export default App;
