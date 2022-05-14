import React, {} from 'react';
import { View, ActivityIndicator, } from 'react-native';
import styles from './styles'

export default Loader = (props) =>
{

    const { isLoading } = props;

    const renderContent = () =>
    {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="white"/>
            </View>
        );
    }


    return isLoading ? renderContent() : null;
}