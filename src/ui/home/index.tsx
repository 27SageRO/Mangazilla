import React, {useEffect} from 'react';
import {StyleSheet, Text, ScrollView, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useTheme} from '@react-navigation/native';
import {Props} from './container';
import HorizontalMangaList from './component/HorizontalMangaList';
import R from 'resource/R';

export default function Home({
  popularManga,
  latestManga,
  getPopularManga,
  getLatestManga,
}: Props) {
  useEffect(() => {
    getLatestManga();
    getPopularManga();
  }, [getPopularManga, getLatestManga]);
  const {colors} = useTheme();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="transparent" translucent />
      <ScrollView>
        <Text style={{...styles.title, color: colors.text}}>Popular Manga</Text>
        <HorizontalMangaList manga={popularManga} />
        <Text style={{...styles.title, color: colors.text}}>Latest Manga</Text>
        <HorizontalMangaList manga={latestManga} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    ...R.fonts.bold,
    fontSize: R.utils.fs(2.5),
    marginLeft: 10,
    marginVertical: 10,
  },
});
