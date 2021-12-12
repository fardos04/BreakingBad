import React, { useState } from 'react';
import { Text, View} from 'react-native';


const QuoteScreen =(props) =>{
    return (
        <View style={{ flexDirection: 'row', paddingVertical: 10, backgroundColor: '#ffffff', marginBottom: 10, borderRadius: 12 }}>
            <View style={{ width: '30%' }}>
            <View style={{ width: 100 }}></View>
            </View>
            <View style={{ width: '70%' }}>
                <Text style={{ fontSize: 16, fontWeight: '700' ,color:'#0B610B'}}>{props.quote.quote}</Text>
                <Text>{props.quote.author}</Text>
                <Text>{props.quote.series}</Text>
            </View>
        </View>
    )

}
export const screenOptions=navData=>{
    return{
        headerTitle: 'Quote'
    }
}
export default QuoteScreen;