import _ from 'lodash';
import React, {useState, Fragment} from 'react';
import {StyleSheet, View, ScrollView, Text, TouchableOpacity, Dimensions} from 'react-native';
import {Calendar} from 'react-native-calendars';

const windowWidth = Dimensions.get('window').width;

export default function CalendarSelect() {
    const [selected, setSelected] = useState('');
    const [showMarkedDatesExamples, setShowMarkedDatesExamples] = useState(false);
    const today = new Date().toString()
    const onDayPress = day => {
        setSelected(day.dateString);
      };
  return (
    <Fragment>
    <Calendar
      current={today}
      style={styles.calendar}
      onDayPress={onDayPress}
      markedDates={{
        [selected]: {
          selected: true,
          disableTouchEvent: true,
          selectedColor: 'orange',
        }
      }}
    />
  </Fragment>
  );
}

const styles = StyleSheet.create({
    calendar: {
        width:windowWidth*0.7,
    }

  });