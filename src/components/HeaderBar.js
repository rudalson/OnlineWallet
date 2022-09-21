import React from 'react';
import {Text, View} from 'react-native';

import {COLORS, FONTS, SIZES} from '../constants';

const HeaderBar = ({title}) => {
  return (
    <View
      style={{
        justifyContent: 'flex-end',
        height: 100,
        paddingHorizontal: SIZES.radius,
      }}>
      <Text
        style={{
          ...FONTS.largeTitle,
          color: COLORS.white,
        }}>
        {title}
      </Text>
    </View>
  );
};

export default HeaderBar;
