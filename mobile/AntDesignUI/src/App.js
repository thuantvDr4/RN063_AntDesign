/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';
import { Button, WhiteSpace, WingBlank } from '@ant-design/react-native';


const App = () => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}>
                    <View>
                        <Text>{'hello'}</Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

//
const styles = StyleSheet.create({

});

export default App;
