import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        할 일 목록
      </Text>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.button}
      >
        <Ionicons
          name="ios-add"
          color="#FFFFFF"
          size={24}
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 56,
    marginBottom: 16,
    marginLeft: 16,
    marginRight: 16,
  },
  title: {
    color: '#212121',
    fontSize: 32,
    fontWeight: '600',
  },
  button: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#212121',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.select({ ios: 2, android: 0 }),
    paddingLeft: Platform.select({ ios: 1, android: 0 }),
  }
})

export default Header
