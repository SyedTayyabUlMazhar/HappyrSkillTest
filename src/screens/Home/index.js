import React, { useState, } from 'react';
import { View, Image, TouchableOpacity, } from 'react-native';
import Video from 'react-native-video';
import styles from './styles';
import Icons from '../../assets/icons';
import { Loader } from '../../components';


export default Home = (props) =>
{
  const { navigation } = props;

  const [isLoading, setIsloading] = useState(true);

  const videoUrl = "https://download.samplelib.com/mp4/sample-15s.mp4"

  const onReadyForDisplay = () =>
  {
    setIsloading(false);
  };

  const renderVideo = () =>
  {
    return (
      <Video source={{ uri: videoUrl }}   // Can be a URL or a local file.
        repeat={true}
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
  }

  return (
    <>
      <View style={styles.container}>
        {renderVideo()}
        {renderSearchIcon()}
      </View>
      <Loader isLoading={isLoading} />
    </>
  );
};