var React = require('react-native');

var styles = require('./styles.js');

var {
  View,
  Text
} = React;

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cmc: false
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Which CMC?
        </Text>
      </View>
      )
  }
}

module.exports = Main;
