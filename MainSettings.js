import React, { useRef } from 'react';
import { View, Text, ScrollView, FlatList, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const { width } = Dimensions.get('window');

const data1 = [
  { id: '1', date: '7.14', title: '삼성 vs 두산', image: 'https://i.ytimg.com/vi/D9JR1Jt_gL8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBBBIpKCBtiloNGHknRf7R7NHZnUg' },
  { id: '2', date: '7.14', title: 'SSG vs KT', image: 'https://i.ytimg.com/vi/xp15LQVPgYc/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBrBQGN7XCrC41uTQKA4hsPC8Fm-g' },
  { id: '3', date: '7.14', title: 'LG vs 한화', image: 'https://i.ytimg.com/vi/7WPGj1oT4lQ/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBjE2TLUU-eYn45HILkb0O3dspkKw' },
  { id: '4', date: '7.13', title: 'SSG vs KT', image: 'https://i.ytimg.com/vi/VdsJz0ejL-8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD_i99SSr-DXc1G52VUEo8-sJGFxg' },
  { id: '5', date: '7.13', title: '삼성 vs 두산', image: 'https://i.ytimg.com/vi/JWv0qXGx5Ys/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCK7ppxr_UP58CN56mlU3FpHDfCZQ' },
  { id: '6', date: '7.13', title: 'KT vs 롯데', image: 'https://i.ytimg.com/vi/kJAHxpcyZiY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDDWnTj-XVxycJVcCUa8REw6cnSiA' },
  { id: '7', date: '7.13', title: '키움 vs NC', image: 'https://i.ytimg.com/vi/pZ1LB_79qBA/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAlVlFJaCcV56yLOWuT8oPhzBYfkA' },
  { id: '8', date: '7.13', title: 'LG vs 한화', image: 'https://i.ytimg.com/vi/pZ1LB_79qBA/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAlVlFJaCcV56yLOWuT8oPhzBYfkA' },
  { id: '9', date: '7.12', title: 'LG vs 한화', image: 'https://i.ytimg.com/vi/WHIKd84JdbY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDOnPpqBX_F84fOiPzK5tplVdTxBw' },
  { id: '10', date: '7.13', title: 'SSG vs KT', image: 'https://i.ytimg.com/vi/7pcdy__0Kvc/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD_gLKIYlC6f9ST0uppl_ZsSZemQw' },
];

const popularRecipesData = [
  { id: '1', title: '7월 17일 롯데 vs 두산 프로야구분석', image: require('./assets/kbo_thumbnail.jpg'), rating: 'KBO', by: 'by.giguan' },
  { id: '2', title: '7월 17일 키움 vs KT 프로야구분석', image: require('./assets/kbo_thumbnail.jpg'), rating: 'KBO', by: 'by.giguan' },
  { id: '3', title: '7월 17일 KIA vs 삼성 프로야구분석', image: require('./assets/kbo_thumbnail.jpg'), rating: 'KBO', by: 'by.giguan' },
  { id: '4', title: '7월 17일 LG vs SSG 프로야구분석', image: require('./assets/kbo_thumbnail.jpg'), rating: 'KBO', by: 'by.giguan' },
  { id: '5', title: '7월 17일 소프트뱅크 vs 치바롯데 프로야구분석', image: require('./assets/npb_thumbnail.webp'), rating: 'NPB', by: 'by.giguan' },
  // ... other items
];

const carouselData = [
  { id: '1', image: require('./assets/mlb_thumbnail.jpg') },
  { id: '2', image: require('./assets/kbo_thumbnail.jpg') },
  { id: '3', image: require('./assets/npb_thumbnail.webp') },
];

const renderItem = ({ item }) => (
  <View style={styles.card}>
    <Image source={{ uri: item.image }} style={styles.image} />
    <Text style={styles.title}>{item.title}</Text>
    <Text style={styles.subtitle}>{item.date}</Text>
  </View>
);

const renderRecipeItem = ({ item }) => (
  <View style={styles.recipeCard}>
    <Image source={item.image} style={styles.recipeImage} />
    <View style={styles.recipeTextContainer}>
      <Text style={styles.recipeTitle}>{item.title}</Text>
      <View style={styles.recipeSubtitleContainer}>
        <Text style={styles.recipeSubtitle}>{item.rating}</Text>
        <Text style={styles.recipeSubtitle}>{item.by}</Text>
      </View>
    </View>
  </View>
);

const renderCarouselItem = ({ item }) => (
  <View style={styles.carouselItem}>
    <Image source={item.image} style={styles.banner} />
  </View>
);

const SectionHeader = ({ title, onPress }) => (
  <View style={styles.sectionHeader}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.seeMore}>더보기</Text>
    </TouchableOpacity>
  </View>
);

const MainSettings = () => {
  const carouselRef = useRef(null);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.carouselContainer}>
          <Carousel
            loop
            width={width * 0.9}
            height={200}
            autoPlay={true}
            data={carouselData}
            scrollAnimationDuration={1000}
            renderItem={renderCarouselItem}
          />
        </View>
        <View style={styles.section}>
          <SectionHeader title="스포츠 하이라이트" onPress={() => alert('더보기 클릭됨')} />
          <FlatList
            data={data1}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.section}>
          <SectionHeader title="스포츠 분석" onPress={() => alert('더보기 클릭됨')} />
          <FlatList
            data={popularRecipesData}
            renderItem={renderRecipeItem}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#16171d',
    padding: 10,
  },
  carouselContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  banner: {
    width: '100%',
    height: 200,
    borderRadius: 15,
  },
  carouselItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  section: {
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  seeMore: {
    fontSize: 14,
    color: 'tomato',
  },
  card: {
    backgroundColor: '#1e1f24',
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  title: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },
  subtitle: {
    fontSize: 12,
    color: '#888',
  },
  recipeCard: {
    flexDirection: 'row',
    backgroundColor: '#1e1f24',
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
  recipeImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  recipeTextContainer: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  recipeTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  recipeSubtitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 200,
  },
  recipeSubtitle: {
    fontSize: 12,
    color: '#888',
  },
});

export default MainSettings;
