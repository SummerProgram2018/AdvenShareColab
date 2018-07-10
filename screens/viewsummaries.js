import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TextInput,
  Button} from 'react-native';

export default class Diary extends Component<Props> {
  constructor (props, context) {
    super (props, context);
    this.state = {
      searchText: 'Search',
      text: 'Enter your diary text here',
      savedText: '',
      numEntries = 0,
      lastDate = '',
    };

    onPressAddEntry () {
      var day = new Date().getDate();
      var month = new Date().getMonth() + 1;
      var year = new Date().getFullYear();
      fullDate = {date: day + '/' + month + '/' + year};
      if (fullDate != this.state.lastDate) {
        this.setState({lastDate: fullDate});
        this.setState({numEntries: numEntries + 1});
      }

    }

    render () {
      return(
        <View style={styles.container}>
          <Image style={styles.backgroundImage} source={require('../res/cloud.png')}/>
          <TextInput
            blurOnSubmit = {false}
            style = {{height: 40, width: 400, borderColor: 'blue', borderWidth: 1}}
            onChangeText = {(searchText) => this.setState({searchText})}
            value = {this.state.searchText}
          />

      )
    }

var styles = StyleSheet.create({
  container:{
      flex:1,
  },
  list: {
     justifyContent: 'center',
     flexWrap: 'wrap',
     flexDirection: 'row',
     height: 100,
   },
   backgroundImage:{
     backgroundColor: 'transparent',
     flex: 1,
     resizeMode: 'contain',
     position: 'absolute',
     width: '100%',
     height: '100%',
     justifyContent: 'center',
   },
   diaryView: {
     flex:1,
     backgroundColor:'transparent',
   },
});
