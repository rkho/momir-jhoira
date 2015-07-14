/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} = React;

var Main = require('./App/Main');

var momirjhoira = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <NavigatorIOS
          barTintColor='#AEB6B9'
          titleTextColor='#696661'
          style={styles.container}
          initialRoute={{
            component: Main,
            title: 'Momir-Jhoira'
          }} />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AEB6B9'
  }
});

AppRegistry.registerComponent('momirjhoira', () => momirjhoira);
