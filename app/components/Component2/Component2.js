import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, TouchableHighlight, TouchableOpacity} from 'react-native';

export default class Component2 extends Component{
  constructor(props) {
    super(props);
    this.state = {
      name: 'Brad',
      showName: true,
      message: this.props.message
    }
  }

  static defaultProps = {
    message: 'Hi There'
  }

  onPress(){
    console.log('Area 1 Pressed')
  }

  onPress2(){
    console.log('Area 2 Pressed')
  }

  render(){
    let name = this.state.showName ? this.state.name : 'No name';
    return(
    <View>
      <View style={styles.myView}>
        <Text style={styles.myText}>{this.state.message}</Text>
        <Text>{name}</Text>
      </View>
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.v1}
          onPress={this.onPress}
          underlayColor='blue'
          >
          <View>
            <Text >View 1</Text>
          </View>
        </TouchableHighlight>
        <TouchableOpacity
          style={styles.v2}
          onPress={this.onPress2}
          >
          <View>
            <Text>View 2</Text>
          </View>
          </TouchableOpacity>
          <View style={styles.v3}>
            <Text>View 3</Text>
          </View>
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  myView: {
    backgroundColor:'blue'
  },
  myText: {
    color: 'white'
  },
  container: {
    flexDirection: 'row',
    height:100
  },
  v1: {
    flex:1,
    backgroundColor: 'red',
    padding:10
  },
  v2: {
    flex:1,
    backgroundColor: 'green',
    padding:10
  },
  v3: {
    flex:1,
    backgroundColor: 'black',
    padding:10
  }
});

AppRegistry.registerComponent('Component2', () => Component2);