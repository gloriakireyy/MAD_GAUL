import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Exercise3 = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome</Text>
      
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.text}>Username</Text>
        <TextInput style={styles.input} placeholder="Masukan username Anda" />
        <Text style={styles.text}>Password</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          placeholder="Masukan password anda"
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      
      </ScrollView>
      </View>
    </>
  );
};

export default Exercise3;

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'white',
  },
  container: {
    marginTop: 20,
    marginRight: 15,
    marginLeft: 15,
    marginBottom: 10,
    backgroundColor: 'white',
  },
  title: {
    marginLeft: 8,
    fontSize:60,
    fontWeight: '900',
    color: 'black',
  },
  subTitle: {
    fontSize: 25,
    fontWeight: '500',
    color: 'pink',
    textAlign: 'center',
  },
  text: {
    marginLeft: 17,
    fontSize: 19,
    color: '#555',
    marginTop: 5,
  },
  input: {
    borderColor: 'black',
    borderWidth: 2,
    fontSize: 18,
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
  button: {
    backgroundColor: 'orange',
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
  },
});

