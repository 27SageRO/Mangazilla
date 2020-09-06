import React, {memo} from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import R from 'resource/R';

type Props = {
  manga: Array<Manga>;
};

export default function HorizontalMangaList({manga}: Props) {
  if (!manga) {
    return null;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={manga}
        keyExtractor={(o, i) => `${o.id}${i}`}
        renderItem={({item}) => <MemoizedItem item={item} />}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </View>
  );
}

type ItemProp = {
  item: Manga;
};

function Item({item}: ItemProp) {
  const {colors} = useTheme();

  return (
    <View style={styles.item}>
      <FastImage
        style={styles.image}
        source={{
          uri: item.thumbnail,
        }}
        resizeMode="cover"
      />
      <Text style={{...styles.text, color: colors.text}} numberOfLines={1}>
        {item.title}
      </Text>
      <Text style={{...styles.latestChapter, color: colors.text}}>
        {item.latestChapter}
      </Text>
    </View>
  );
}

const MemoizedItem = memo(Item);

const styles = StyleSheet.create({
  container: {},
  item: {
    width: R.utils.hp(25),
    marginHorizontal: 10,
  },
  image: {
    height: R.utils.hp(30),
    width: R.utils.hp(25),
    borderRadius: 4,
  },
  text: {
    ...R.fonts.regular,
    fontSize: R.utils.fs(1.7),
    marginTop: 4,
    marginHorizontal: 4,
  },
  latestChapter: {
    ...R.fonts.thin,
    fontSize: R.utils.fs(1.7),
    marginTop: 4,
    marginHorizontal: 4,
  },
});
