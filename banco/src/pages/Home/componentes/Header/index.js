import React from 'react';
import { View, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';
import { Feather } from 'react-native-feather';
import {} from '@expo/vector-icons'


const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;
export default function Header(){

    console.log(StatusBar)

    return(
        <View style={styles.container}>
           <View style={styles.content}>
            <Text>
                Sujeito prog
            </Text>
            <TouchableOpacity>
                {/* <Feather name="user" size={27} color="fff"/> */}
            </TouchableOpacity>
           </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#8000ff',
       paddingTop: statusBarHeight,
    }
})