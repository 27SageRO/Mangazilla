import React from 'react';
import {View, StyleSheet, Text, StatusBar} from 'react-native';
import R from 'resource/R';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomText from 'component/CustomText';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="transparent" translucent />
      <CustomText text="test" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
