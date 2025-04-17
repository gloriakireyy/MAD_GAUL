// Name         : Siregar, Hizkia Gaynell Pascal
// Description  : Exercise - 4

import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

const Exercise4 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.black}></View>
        <View style={styles.yellow}></View>
        <View style={styles.black}></View>
      </View>

      <View style={styles.photo}>
        <Image source={require('./assets/unklab.png')} style={styles.image} />
      </View>

      <View style={styles.bottom}>
        <View style={styles.black}></View>
        <View style={styles.yellow}></View>
        <View style={styles.black}></View>
      </View>
    </View>
  );
};

export default Exercise4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  top: {
    backgroundColor: 'red',
    height: 110,
    flexDirection: 'row',
    paddingLeft: 10,
    alignItems: 'center',
  },
  bottom: {
    backgroundColor: 'blue',
    height: 110,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  black: {
    backgroundColor: 'black',
    width: 60,
    height: 60,
    marginRight: 10,
  },
  yellow: {
    backgroundColor: 'yellow',
    width: 60,
    height: 60,
    marginRight: 10,
  },
  photo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 329,
    height: 75,
  },
});
