/* eslint-disable react-native/no-inline-styles */
import {SafeAreaView, Text, Image, StyleSheet, View} from 'react-native';
import React from 'react';

const Settings = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imgView}>
        <Image
          source={{
            uri: 'https://img.icons8.com/ios/50/null/gear.png',
          }}
          style={styles.imgStyle}
        />
        <Text style={{marginTop: 5}}>Settings</Text>
      </View>
      <View style={styles.imgView}>
        <Image
          source={{
            uri: 'https://img.icons8.com/ios/50/null/admin-settings-male.png',
          }}
          style={styles.imgStyle}
        />
        <Text style={{marginTop: 5}}>Profile</Text>
      </View>
      <View style={styles.imgView}>
        <Image
          source={{
            uri: 'https://img.icons8.com/dotty/80/null/logout-rounded.png',
          }}
          style={styles.imgStyle}
        />
        <Text style={{marginTop: 5}}>Logout</Text>
      </View>
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'white',
  },
  imgStyle: {
    height: 25,
    width: 25,
    resizeMode: 'cover',
    tintColor: 'black',
    marginHorizontal: 15,
  },
  imgView: {flexDirection: 'row', marginVertical: 30},
});
