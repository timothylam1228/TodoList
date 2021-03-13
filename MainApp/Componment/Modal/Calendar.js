import _ from 'lodash';
import React, {useState, Fragment} from 'react';
import {
  StyleSheet,
  Dimensions,
  Text
} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {TextInput} from 'react-native-paper';
import moment from 'moment';
import firestore from '@react-native-firebase/firestore';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function CalendarSelect(props) {
  const today = new Date().toString();
  const [selected, setSelected] = useState('');

  const onDayPressed = (day) => {
    setSelected(day.dateString);
    var d = new Date(day.dateString);
    props.onDayPress(day.timestamp);
  };

  return (
    <Fragment>
      <Calendar
        current={today}
        style={styles.calendar}
        onDayPress={onDayPressed}
        markedDates={{
          [selected]: {
            selected: true,
            disableTouchEvent: true,
            selectedColor: 'orange',
          },
        }}
      />
      
    </Fragment>
    
  );
}

const styles = StyleSheet.create({
  calendar: {
    width: windowWidth * 0.7,
  },
});
