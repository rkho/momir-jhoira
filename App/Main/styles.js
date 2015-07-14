var React = require('react-native');

var {
  StyleSheet
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#AEB6B9'
  },
  topBar: {
    flex: 1,
    marginTop: 75,
  },
  slider: {
    height: 10,
    width: 200
  },
  cmcText: {
    color: '#696661',
    fontSize: 26
  },
  button: {
    color: '#696661'
  }
})

module.exports = styles;
