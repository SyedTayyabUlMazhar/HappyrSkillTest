import React, { useEffect, useRef, useState, } from 'react';
import { View, Image, TextInput, Animated, FlatList, } from 'react-native';
import Icons from '../../assets/icons';
import styles from './styles';
import { withAnchorPoint } from 'react-native-anchor-point';
import { Dimens } from '../../theme';
import Item from './Item';
import mockData from "../../mockData";

export default Search = () =>
{
  const [data, setData] = useState(mockData);

  const scaleAnim = useRef(new Animated.Value(0)).current;

  useEffect(() =>
  {
    setTimeout(animate, 200);
  }, []);

  const animate = () =>
  {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
      speed: 10,
    }).start();
  };

  const renderSearchInput = () =>
  {
    const searchInputContainerStyle = [
      styles.searchInputContainer,
      withAnchorPoint(
        { transform: [{ scaleX: scaleAnim }] },
        { x: 1, y: 0.5 },
        {
          width: Dimens.screenWidth,
          height: 56,
        },
      ),
    ];

    return (
      <Animated.View style={searchInputContainerStyle}>
        <Image
          style={styles.searchIcon}
          source={Icons.search}
        />
        <TextInput style={styles.searchInput} />
      </Animated.View>
    );
  };

  const renderList = () => 
  {
    return (
      <FlatList
        data={data}
        contentContainerStyle={styles.contentContainer}
        renderItem={({ item }) => <Item data={item} />}
        ItemSeparatorComponent={() => <View style={styles.divider} />}
        showsVerticalScrollIndicator={false}
      />
    )
  }
  return (
    <View style={styles.container}>
      {renderSearchInput()}
      {renderList()}
    </View>
  );
};
