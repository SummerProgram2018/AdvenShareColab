{/*Need to make it so that this file makes the blue box for diary summary */}
import React, {Component} from 'react';

export class entryInfo extends Component {
  constructor (props, context) {
    super(props, context);
    this.state = {
      caption: "",
      date: "",
      images: [],
    };
    getDate = this.getDate.bind(this)
  }
  onPressgetDate() {
    var day = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    this.setState({date: day + '/' + month + '/' + year});
  }

  render() {
    return (
      <View>
      <Text>{this.props.date}</Text>
      </View>
    )
  }
}
