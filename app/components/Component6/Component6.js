import React, {Component} from 'react';
import {AppRegistry, Text, View, Button} from 'react-native';

export default class Component6 extends Component{
  constructor(props){
    super(props);
    this.state = {
      user: this.props.user
    };
  }

  onPress(){
    this.props.navigator.push({
      page: 'component5'
    })
  }
  render(){
    return(
      <View>
        <Text>{this.state.user.name}</Text>
        <Text>{this.state.user.email}</Text>
        <Button
          onPress={this.onPress.bind(this)}
          title='Go Back'
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('Component6', () => Component6);