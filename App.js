import React from 'react';
import { StyleSheet, Text, SafeAreaView, FlatList } from 'react-native';
import Header from './components/Header'
import TodoItem from './components/TodoItem'
import TodoModal from './components/TodoModal'

export default class App extends React.Component {
  state = {
    todos: [{
      title: '클래스101 커리큘럼 만들기',
      done: true,
    }, {
      title: '운전면허 도로 주행 연수',
      done: false,
    }],
    showModal: false,
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header
          show={() => {
            this.setState({ showModal: true })
          }}
        />
        <FlatList
          data={this.state.todos}
          renderItem={({ item }) => {
            return (<TodoItem title={item.title} done={item.done} />)
          }}
          keyExtractor={(_, index) => `${index}`}
        />
        <TodoModal
          isVisible={this.state.showModal}
          add={(title) => {
            this.setState({
              todos: this.state.todos.concat({
                title: title,
                done: false,
              }),
              showModal: false,
            })
          }}
          hide={() => {
            this.setState({ showModal: false})
          }}
        />
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
