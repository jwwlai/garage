/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {

  constructor(props) {
    super(props);

    // Eventually this will need to make a request to see if the garage door is open/closed
    this.state = {
      closed: true
    };
  }

  _toggleStatus() {
    this.setState({ closed: !this.state.closed });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Current garage state: {this.state.closed ? "Closed" : "Open"}</Text>
        <Button
          title={this.state.closed ? "Open" : "Close"}
          onPress={() => {
          	this._toggleStatus()
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
