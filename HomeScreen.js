import React from 'react';
import 'react-native-gesture-handler';
import { View, Text, ScrollView, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';

const data1 = [
    { id: '1', title: '7.14 삼성 vs 두산', image: 'https://i.ytimg.com/vi/D9JR1Jt_gL8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBBBIpKCBtiloNGHknRf7R7NHZnUg' },
    { id: '2', title: '7.14 SSG vs KT', image: 'https://i.ytimg.com/vi/xp15LQVPgYc/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBrBQGN7XCrC41uTQKA4hsPC8Fm-g' },
    { id: '3', title: '7.14 LG vs 한화', image: 'https://i.ytimg.com/vi/7WPGj1oT4lQ/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBjE2TLUU-eYn45HILkb0O3dspkKw' },
    { id: '4', title: '7.13 SSG vs KT', image: 'https://i.ytimg.com/vi/VdsJz0ejL-8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD_i99SSr-DXc1G52VUEo8-sJGFxg' },
    { id: '5', title: '7.13 삼성 vs 두산', image: 'https://i.ytimg.com/vi/JWv0qXGx5Ys/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCK7ppxr_UP58CN56mlU3FpHDfCZQ' },
    { id: '6', title: '7.13 KT vs 롯데', image: 'https://i.ytimg.com/vi/kJAHxpcyZiY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDDWnTj-XVxycJVcCUa8REw6cnSiA' },
    { id: '7', title: '7.13 키움 vs NC', image: 'https://i.ytimg.com/vi/pZ1LB_79qBA/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAlVlFJaCcV56yLOWuT8oPhzBYfkA' },
    { id: '8', title: '7.13 LG vs 한화', image: 'https://i.ytimg.com/vi/pZ1LB_79qBA/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAlVlFJaCcV56yLOWuT8oPhzBYfkA' },
    { id: '9', title: '7.12 LG vs 한화', image: 'https://i.ytimg.com/vi/WHIKd84JdbY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDOnPpqBX_F84fOiPzK5tplVdTxBw' },
    { id: '10', title: '7.12 SSG vs KT', image: 'https://i.ytimg.com/vi/7pcdy__0Kvc/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD_gLKIYlC6f9ST0uppl_ZsSZemQw' },
    // { id: '11', title: '7.12 키움 vs NC', image: 'https://i.ytimg.com/vi/ui__0rzWc_Q/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDgm8ovfckO5EDk-siPomFZszSkbA' },
    // { id: '12', title: '7.12 KT vs 롯데', image: 'https://i.ytimg.com/vi/VV4LEngTUt4/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD8HHc2javQdpNUhoJfuMupuvEjlw' },
  ];
  
const data2 = [
{ id: '1', title: '주간 MLB 분석', image: require('./assets/mlb_thumbnail.jpg') },
{ id: '2', title: 'KBO 분석', image: require('./assets/kbo_thumbnail.jpg') },
{ id: '3', title: 'NPB 분석', image: require('./assets/npb_thumbnail.webp') },
{ id: '4', title: 'Match 4', image: require('./assets/mlb_thumbnail.jpg') },
];

const data3 = [
{ id: '1', title: 'Dont Breathe 2', image: 'https://occ-0-64-58.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABQ1edpLJyw_8tln7ddFRXWXX4EkxJpBzGMSOGw9GyqTvsXU0gIseJIhhG-GMJ_LAJNHbRMVBZkI22uZuPLfMf7kErP0_QUoFy5A.jpg?r=e7d' },
{ id: '2', title: 'Anyon But You', image: 'https://occ-0-64-58.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABUimXlXgKO60sIsu0s-1sig7PvRDqhzOy8p_3Hq6vuBv2Lu44jNNR-_PdF-6GXbWl6dyaTPDADQ1qJHDtFJWuFwmrEN8SVVupGg0iwajc8z1S8fCvv2ztfNzJ2pMiI6e8KjlP84JrYHgE5K5KXY6n8nomD2ot_FgYKUsRqr4sKEqhcCbn03UN22tPZJ2WITYTtfJwkePmSSLOK9Fo6XsBtj9aB4rvbjknX6czU1qovSlcmwYhDPg2_tQ7HPZNnK5c00iI1jTSrlM1GYSrzYeJbSkUv3e.jpg?r=b9f' },
{ id: '3', title: 'Charlie and the Chocolate Factory', image: 'https://occ-0-64-58.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABaKG7E3n2yDZKjMC3oNrjOUQm983sVW_eXNP-wIiB5rtWqqn194v-BsNusjt2Zh6r3qYfPWTmUTd2Q4DUvRmzJOyXCkL4tgMKqk.jpg?r=eb9' },
{ id: '4', title: 'The White Storm 2: Drug Lords', image: 'https://occ-0-64-58.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZqSjaBayNBPA1jSe2kDDTdq8GQ_FXeKH_YAwzmHr34yjrl_jedI7HZGXCh6nxNU2O1IKsIRgeRSNsjB8pihBIKz9xkDT0mMqN0.jpg?r=5f0' },
{ id: '5', title: 'Bad Blood', image: 'https://occ-0-64-58.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZe5S9VnHs8H49KavphAsc1bQ5ZxEkeiIsgKo-BZz7V6Kw8q8-9pV_kcbFTJHagR7f3oDs3KfG0Dw5aSaAIQuHmIeK_m0Nj3nLc.jpg?r=c8b' },
];

const data4 = [
{ id: '1', title: '7.31 쿠플시리즈', image: 'https://news.coupang.com/wp-content/uploads/2024/06/coupang-play-series-reservation-game-schedule-announce-240605-01.jpg' },
{ id: '2', title: '2024 서울 시리즈', image: 'https://news.coupang.com/wp-content/uploads/2024/06/coupang-play-mlb-seoul-series-special-game-231221.png' },
{ id: '3', title: 'A 매치', image: 'https://news.coupang.com/wp-content/uploads/2023/09/20230906_030101.jpg' },
{ id: '4', title: '덴마크 미트윌란 FC', image: 'https://news.coupang.com/wp-content/uploads/2023/07/20230729_023130-600x600.jpg' },
{ id: '5', title: 'Match 5', image: 'https://via.placeholder.com/150' },
{ id: '6', title: 'Match 6', image: 'https://via.placeholder.com/150' },
{ id: '7', title: 'Match 7', image: 'https://via.placeholder.com/150' },
{ id: '8', title: 'Match 8', image: 'https://via.placeholder.com/150' },
{ id: '9', title: 'Match 9', image: 'https://via.placeholder.com/150' },
{ id: '10', title: 'Match 10', image: 'https://via.placeholder.com/150' },
{ id: '11', title: 'Match 11', image: 'https://via.placeholder.com/150' },
{ id: '12', title: 'Match 12', image: 'https://via.placeholder.com/150' },
];

const truncateText = (text, maxLength) => {
if (text.length > maxLength) {
    return text.substring(0, maxLength) + '...';
}
return text;
};

const renderItem = ({ item }) => (
<View style={styles.card}>
    <Image source={typeof item.image === 'string' ? { uri: item.image } : item.image} style={styles.image} />
    <Text style={styles.title}>{truncateText(item.title, 15)}</Text>
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
  
  function HomeScreen({ navigation }) {

    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <ScrollView style={styles.container}>
            <View style={styles.section}>
              <SectionHeader title="스포츠 중계 및 일정" onPress={() => alert('더보기 클릭됨')} />
              <FlatList
                data={data1}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </ScrollView>
          <ScrollView style={styles.container}>
            <View style={styles.section}>
              <SectionHeader title="스포츠 분석" onPress={() => alert('더보기 클릭됨')} />
              <FlatList
                data={data2}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </ScrollView>
          <ScrollView style={styles.container}>
            <View style={styles.section}>
              <SectionHeader title="VOD 추천" onPress={() => alert('더보기 클릭됨')} />
              <FlatList
                data={data3}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </ScrollView>
          <ScrollView style={styles.container}>
            <View style={styles.section}>
              <SectionHeader title="스포츠 하이라이트" onPress={() => alert('더보기 클릭됨')} />
              <FlatList
                data={data4}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#16171d',
    },
    content: {
      flex: 1,
    },
    section: {
      marginVertical: 10,
    },
    sectionHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
      marginBottom: 10, // 섹션 타이틀과 이미지 사이에 간격 추가
    },
    sectionTitle: {
      fontSize: 18,
      fontFamily: 'KBO-Dia-Gothic_bold',
      color: '#ee4b23',
      marginHorizontal: '10px',
    },
    seeMore: {
      color: '#fff',
    },
    card: {
      marginHorizontal: 10,
      width: 100, 
    },
    image: {
        width: '100%',
        height: 100,
        resizeMode: 'cover',
    },
    title: {
        fontFamily: 'KBO-Dia-Gothic_medium',
        textAlign: 'center',
        color: '#fff',
        marginTop: 5, // 이미지와 텍스트 사이에 간격 추가

    },
  });
  
  export default HomeScreen;