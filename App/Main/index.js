var React = require('react-native');

var styles = require('./styles.js');
var Button = require('react-native-button');

var {
  View,
  Text,
  SliderIOS
} = React;

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cmc: 0
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topBar}>
          <SliderIOS
            style={styles.slider}
            minimumValue={0}
            maximumValue={15}
            minimumTrackTintColor='#803633'
            maximumTrackTintColor='#242841'
            onValueChange={(value) => {
              this.setState({
                cmc: Math.floor(value)
              })
            }} />
          <Text style={styles.cmcText}>
            {this.state.cmc}
          </Text>
          <Button style={styles.button}
            onPress={this._handlePress}>
            Generate!
          </Button>
        </View>
      </View>
      )
  }
}

module.exports = Main;
