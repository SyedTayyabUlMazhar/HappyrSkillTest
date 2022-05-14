import React, {} from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';
import styles from './styles';
import Icons from '../../assets/icons';


export default Home = () =>
{
  const videoUrl = "https://download.samplelib.com/mp4/sample-15s.mp4"

  const renderVideo = () =>
  {
    return (
      <Video source={{ uri: videoUrl }}   // Can be a URL or a local file.
        repeat={true}
        resizeMode={"cover"}
        style={StyleSheet.absoluteFill}
      />
    );
  };

  const renderSearchIcon = () =>
  {
    return (
      <TouchableOpacity style={styles.searchIconContainer}>
        <Image
          style={styles.searchIcon}
          source={Icons.search}
        />
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      {renderVideo()}
      {renderSearchIcon()}
    </View>
  );
};