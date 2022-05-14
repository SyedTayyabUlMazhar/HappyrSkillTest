import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';


export default Item = (props) =>
{
  const { data } = props;
  const { thumbnail, title, description, url } = data;

  const renderTitleAndDescription = () =>
  {
    return (
      <View style={styles.titleAndDescription}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    )
  }
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{uri:thumbnail}} style={styles.thumbnail} />
      {renderTitleAndDescription()}
    </TouchableOpacity>
  );
};
