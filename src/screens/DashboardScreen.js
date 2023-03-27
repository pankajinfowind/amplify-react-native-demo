import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Auth, DataStore} from 'aws-amplify';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {TestModal} from '../models';

const DashboardScreen = () => {
  const signOutCall = async () => {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log('error signing out: ', error);
    }
  };
  const recordNewItem = async () => {
    await DataStore.save(new TestModal({name: 'NewRecord added'}));
  };
  return (
    <View style={styles.container}>
      <View style={styles.headingView}>
        <Text style={styles.headingText}>Welcome to the Dashboard..!!</Text>
      </View>

      <View style={styles.btnView}>
        <TouchableOpacity style={styles.logoutBtn} onPress={recordNewItem}>
          <Text style={styles.btnText}>Record new item</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.spacer} />
      <View style={styles.btnView}>
        <TouchableOpacity style={styles.logoutBtn} onPress={signOutCall}>
          <Text style={styles.btnText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default DashboardScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 18,
  },
  headingView: {
    top: 65,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 18,
  },
  headingText: {fontWeight: 'bold', fontSize: 20},
  btnView: {
    top: 70,
    width: '80%',
    backgroundColor: 'blue',
  },
  recordBtnView: {
    width: '80%',
    backgroundColor: 'red',
  },
  logoutBtn: {
    marginHorizontal: 20,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 18,
  },
  recordBtn: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },

  btnText: {
    fontSize: 16,
    color: 'white',
  },
  spacer: {height: 10},
});
