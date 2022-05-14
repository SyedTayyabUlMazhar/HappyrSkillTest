import React, { useState, useEffect, } from 'react';
import { View, Image, TouchableOpacity, Text, } from 'react-native';
import Video from 'react-native-video';
import styles from './styles';
import Icons from '../../assets/icons';
import { Loader } from '../../components';
import RequestUtils from '../../utils/RequestUtils';

export default Home = (props) =>
{
  const { navigation, route } = props;

  const [initialData, setInitialData] = useState();

  const videoData = route?.params?.data ?? initialData;

  const [isLoading, setIsloading] = useState(false);

  const fetchInitialData = async () =>
  {
    setIsloading(true);
    const data = await RequestUtils.getInitialVideoData();

    setInitialData(data);
    setIsloading(false);
  };

  useEffect(() =>
  {
    fetchInitialData();
  }, []);

  const onReadyForDisplay = () =>
  {
    setIsloading(false);
  };

  const onLoadStart = () =>
  {
    setIsloading(true);
  };

  const renderVideo = () =>
  {
    return (
      <Video source={{ uri: videoData.url }}
        repeat={true}
        onLoadStart={onLoadStart}
        onReadyForDisplay={onReadyForDisplay}
        resizeMode={"cover"}
        style={styles.video}
      />
    );
  };

  const onSearchPress = () =>
  {
    navigation?.navigate("Search")
  };

  const renderSearchIcon = () =>
  {
    return (
      <TouchableOpacity style={styles.searchIconContainer} onPress={onSearchPress}>
        <Image
          style={styles.searchIcon}
          source={Icons.search}
        />
      </TouchableOpacity>
    );
  };

  const renderInfo = () =>
  {
    const { title, description, tag, } = videoData;

    return (
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.tag}>{tag}</Text>
      </View>
    )
  }

  const renderVideoAndInfo = () => 
  {
    if (videoData === undefined)
      return null;
    else return (
      <>
        {renderVideo()}
        {renderInfo()}
      </>
    );
  };

  return (
    <>
      <View style={styles.container}>
        {renderVideoAndInfo()}
        {renderSearchIcon()}
      </View>
      <Loader isLoading={isLoading} />
    </>
  );
};