import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import logo from '../img/logo.png';
const Header = () =>{
    return (
        <View style={{width:100,height:100}}>
            <img src={logo} alt=''/>
        </View>
    )
}
export default Header;