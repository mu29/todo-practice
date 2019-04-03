import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

const TodoItem = ({
  title,
  done,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.todo}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={done ? styles.done : styles.check}
        >
          <FontAwesome
            name="check"
            size={14}
            color={done ? '#FFFFFF' : '#E0E0E0'}
          />
        </TouchableOpacity>
        <Text style={styles.title}>
          {title}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: '#FFFFFF',
  },
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  check: {
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 14,
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  done: {
    backgroundColor: '#6830CF',
    borderRadius: 14,
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  title: {
    fontSize: 16,
    color: '#424242',
  }
})

export default TodoItem
