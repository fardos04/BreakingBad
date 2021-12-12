import React, { useState } from 'react';
import { Text, View } from 'react-native';

const EpisodeScreen =(props) =>{
    return (
        <View style={{ flexDirection: 'row', paddingVertical: 10, backgroundColor: '#ffffff', marginBottom: 10, borderRadius: 12 }}>
            <View style={{ width: '30%' }}>
            <View style={{ width: 100 }}></View>
            </View>
            <View style={{ width: '70%' }}>
                <Text style={{ fontSize: 16, fontWeight: '700',color:'#0B610B' }}>{props.episode.title}</Text>
                <Text>Season {props.episode.season} | Episode {props.episode.episode}</Text>
                <Text>Air Date {props.episode.air_date}</Text>
            </View>
        </View>
    )

}
export const screenOptions=navData=>{
    return{
        headerTitle: 'Episode'
    }
}
export default EpisodeScreen;