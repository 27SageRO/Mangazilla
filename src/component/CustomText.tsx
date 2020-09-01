import React from 'react';
import {Text, StyleProp, TextStyle} from 'react-native';
import {useTheme} from '@react-navigation/native';

type Props = {
  style?: StyleProp<TextStyle>;
  text: string;
};

export default function CustomText({style, text}: Props) {
  const {colors} = useTheme();
  return <Text style={[style, {color: colors.text}]}>{text}</Text>;
}
