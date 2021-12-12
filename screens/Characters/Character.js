import React, { useState } from 'react';
import {  Text, View, TouchableOpacity } from 'react-native';
import CharacterDetailsScreen from '../Characters/CharacterDetails';


const CharacterScreen =(props) =>{
    let statusColor = null;
    switch (props.char.status) {
        case 'Deceased':
            statusColor = '#880000';
            break;
        case 'Alive':
            statusColor = '#99cc00';
            break;
        case 'Unknown':
            statusColor = '#ffcc00';
            break;
    }

    
    
    return (


        <View style={{ flexDirection: 'row', paddingVertical: 10, backgroundColor: '#ffffff', marginBottom: 10, borderRadius: 12 }}>
       
            <View style={{ width: '30%' }}>
            <View style={{ width: 100 }}><img style={{borderRadius:20 }} src={props.char.img} alt=''/></View>
            </View>
            <View style={{ width: '70%' }}>
                <Text style={{ fontSize: 16, fontWeight: '700',color:'#0B610B' }}>{props.char.name}</Text>
               
                <Text>{props.char.nickname}</Text>
                <Text>{props.char.occupation[0]}</Text>
                <Text style={{ color: statusColor }}>{props.char.status}</Text>
            </View>
        </View>

    )

}

export const screenOptions=navData=>{
    return{
        headerTitle: 'Character'
    }
}
export default CharacterScreen;