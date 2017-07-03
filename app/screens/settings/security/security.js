import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Security extends Component {
  static navigationOptions = {
    title: 'Security',
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.options}
          onPress={() => this.props.navigation.navigate("ChangePassword")}>
          <View style={styles.optionsElement}>
            <Text style={styles.optionsText}>
              Change password
            </Text>
            <View style={styles.optionsIcon}>
              <Icon
                name="angle-right"
                size={50}
                color="#4D4D4D"
              />
            </View>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.options}
          onPress={() => this.props.navigation.navigate("TwoFactor")}>
          <View style={styles.optionsElement}>
            <Text style={styles.optionsText}>
              Two factor
            </Text>
            <View style={styles.optionsIcon}>
              <Icon
                name="angle-right"
                size={50}
                color="#4D4D4D"
              />
            </View>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.options}
          onPress={null}>
          <View style={styles.optionsElement}>
            <Text style={styles.optionsText}>
              Pin
            </Text>
            <View style={styles.optionsIcon}>
              <Icon
                name="angle-right"
                size={50}
                color="#4D4D4D"
              />
            </View>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  options: {
    padding: 20,
    height: 80,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionsElement: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  optionsText: {
    flex: 1,
    fontSize: 18,
    color: '#4D4D4D',
  },
  optionsIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
})
