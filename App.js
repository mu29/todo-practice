import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import Header from './components/Header'
import TodoItem from './components/TodoItem'
import TodoModal from './components/TodoModal'

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header />
        <TodoItem title="클래스101 수업 촬영" done={true} />
        <TodoItem title="운전면허 도로연수" done={false} />
        <TodoModal isVisible={false} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
