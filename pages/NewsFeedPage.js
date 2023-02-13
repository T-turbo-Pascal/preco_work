import React, { useState, useEffect } from 'react';
import axios from 'axios';
import cheerio from 'cheerio';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const NewsParser = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      console.log('Fetching data...');
      const result = await axios.get('https://www.fm.uniba.sk/o-fakulte/aktuality/');
      const $ = cheerio.load(result.data);
      const newsData = [];

      $('.news-list-container .news-content').each((i, elem) => {
        const header = $(elem).find('h2 font font').text();
        const photo = $(elem).find('.image').css('background-image')
          ? $(elem).find('.image').css('background-image').replace(/^url\("(.*)"\)$/, '$1')
          : '';

        const description = $(elem).find('p font font').text();
        const date = $(elem).find('span font font').text();

        newsData.push({ header, photo, description, date });
      });
      console.log('News data: ', newsData);
      setNews(newsData);
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      {news.map((item, index) => (
        <Card key={index} style={styles.card}>
          <Card.Cover
            source={{ uri: item.photo ? item.photo : 'https://via.placeholder.com/300x200' }}
          />
          <Card.Content>
            <Title>{item.header}</Title>
            <Paragraph>{item.description}</Paragraph>
            <Text style={styles.date}>{item.date}</Text>
          </Card.Content>
        </Card>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5'
  },
  card: {
    marginVertical: 10
  },
  date: {
    fontSize: 12,
    color: 'gray'
  }
});

export default NewsParser;
