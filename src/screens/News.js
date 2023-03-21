/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  Image,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useState, useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';

const News = () => {
  const [news, setNews] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation();

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  useEffect(() => {
    apiCall();
  }, []);
  const apiCall = async () => {
    try {
      const res = await fetch(
        'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b4ec3cc24db34f34be910d2950ec04d2',
      );
      const response = await res.json();
      setNews(response);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(news, 'newsnews');

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View style={styles.container}>
        {news.articles?.map((item, index) => {
          return (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                padding: 5,
                flexWrap: 'wrap',
              }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('NewsDetails', item)}>
                <Image
                  source={{uri: item?.urlToImage}}
                  style={{height: 75, width: 75}}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('NewsDetails', item)}>
                <Text>{item?.title}</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default News;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
