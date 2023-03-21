/* eslint-disable react-native/no-inline-styles */
import {Text, SafeAreaView, Image, StyleSheet} from 'react-native';
import React from 'react';

const NewsDetails = props => {
  const params = props?.route?.params;
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{uri: params?.urlToImage}}
        style={{height: 150, width: 150, resizeMode: 'cover'}}
      />
      <Text style={styles.textStyle}>{`Author Name: ${params?.author}`}</Text>
      <Text
        style={styles.textStyle}>{`Published At: ${params?.publishedAt}`}</Text>
      <Text style={styles.textStyle}>{`Title: ${params?.title}`}</Text>
      <Text
        style={styles.textStyle}>{`Description: ${params?.description}`}</Text>
    </SafeAreaView>
  );
};

export default NewsDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 25,
  },
  textStyle: {
    alignSelf: 'center',
    fontSize: 17,
    fontWeight: '600',
    width: '90%',
    marginVertical: 15,
  },
});
