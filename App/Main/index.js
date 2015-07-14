var React = require('react-native');

var styles = require('./styles.js');
var Button = require('react-native-button');

var {
  View,
  Text,
  SliderIOS,
} = React;

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cmc: 0,
      historyCreatures: [],
      historySpells: [],
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <SliderIOS
            style={styles.slider}
            minimumValue={0}
            maximumValue={15}
            maximumTrackTintColor='#803633'
            minimumTrackTintColor='#242841'
            onValueChange={(value) => {
              this.setState({
                cmc: Math.floor(value)
              })
            }} />
          <Text style={styles.cmcText}>
            {this.state.cmc}
          </Text>
          <Button style={styles.button}
            onPress={() => this._handleMomirPress(this.state.cmc)}>
            Momir
          </Button>
          <Button style={styles.button}
            onPress={() => this._handleJhoiraPress(this.state.cmc)}>
            Jhoira
          </Button>
        </View>
      </View>
      )
  }

  _handleMomirPress(value) {
    console.log('hooray', value);
  }

  _handleJhoiraPress(value) {
    console.log('jhoira!', value)
  }
}

module.exports = Main;
