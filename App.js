import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList, 
  AsyncStorage,
  Platform,
  StatusBar,
} from 'react-native';
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

  componentWillMount() {
    AsyncStorage.getItem('@todo:state').then((state) => this.setState(JSON.parse(state)))
  }

  save = () => {
    AsyncStorage.setItem('@todo:state', JSON.stringify(this.state))
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
          renderItem={({ item, index }) => {
            return (
              <TodoItem
                title={item.title}
                done={item.done}
                toggle={() => {
                  const newTodos = [...this.state.todos]
                  newTodos[index].done = !newTodos[index].done
                  this.setState({ todos: newTodos }, this.save)
                }}
                remove={() => {
                  this.setState({
                    todos: this.state.todos.filter((_, i) => i !== index),
                  }, this.save)
                }}
              />
            )
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
            }, this.save)
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
    paddingTop: Platform.OS === 'ios' ? 0 : StaturBar.currentHeight,
  },
});
