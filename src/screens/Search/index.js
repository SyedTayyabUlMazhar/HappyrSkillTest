import React, { useEffect, useRef, useState, } from 'react';
import { View, Image, TextInput, Animated, FlatList, } from 'react-native';
import Icons from '../../assets/icons';
import styles from './styles';
import { withAnchorPoint } from 'react-native-anchor-point';
import { Dimens } from '../../theme';
import Item from './Item';
import { Loader } from '../../components';
import RequestUtils from '../../utils/RequestUtils';

export default Search = (props) =>
{
  const navigation = props.navigation;

  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const perfomSearch = async (text) =>
  {
    setIsLoading(true);

    const response = await RequestUtils.searchVideos(text);

    setData(response);
    setIsLoading(false);
  };


  useEffect(() =>
  {
    // Delay request, to prevent sending requests to often.
    // if the user changes search text before delay completes,
    // then the current request will be cancelled and a new request will be sent.

    const timeout = setTimeout(() =>
    {
      perfomSearch(searchText);
    }, 800);

    return () =>
    {
      clearTimeout(timeout);
    }
  }, [searchText]);


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
        <TextInput
          style={styles.searchInput}
          value={searchText}
          onChangeText={setSearchText}
        />
      </Animated.View>
    );
  };

  const onPressItem = (itemData) => 
  {
    navigation.navigate('Home', { data:itemData });
  }
  const renderItem = (listItem) =>
  {
    const data = listItem.item;
    return (
      <Item
        onPress={() => onPressItem(data)}
        data={data}
      />
    );
  }
  const renderList = () => 
  {
    return (
      <FlatList
        data={data}
        contentContainerStyle={styles.contentContainer}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={styles.divider} />}
        showsVerticalScrollIndicator={false}
      />
    )
  }
  return (
    <>
      <View style={styles.container}>
        {renderSearchInput()}
        {renderList()}
      </View>
      <Loader isLoading={isLoading} />
    </>
  );
};
