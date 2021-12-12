import React,{useState} from 'react';
import {View,Text,TouchableOpacity,FlatList, ScrollView} from 'react-native';
import Style from '../../utilty/appStyle';
import Quote from '../Quotes/Quote';


const QuotesScreen = () =>{
    const baseUrl = 'https://www.breakingbadapi.com/api/quotes';
    console.log(baseUrl)
  const [serverData, setServerData] = useState([]);
  
  const getData = async () => {
    
    const response = await fetch(baseUrl, {
      method: 'GET'
    });
    const newData = await response.json();
    setServerData(newData);
    console.log("My data :: ",newData);
  }
    return(
        <ScrollView >
            <View style={Style.container}>
              <View> 
                    <FlatList 
                      data={serverData}
                      keyExtractor={item => item.quote_id}
                      renderItem={quoteItem => <Quote 
                        quote = {quoteItem.item}
                        />}
                    />
              </View>
              <View >
                <TouchableOpacity  style={Style.btnContainer} onPress={getData}>
                  <Text>Quotes</Text>
                </TouchableOpacity>
              </View>
            </View>
    </ScrollView>
  );
}

export const screenOptions=navData=>{
    return{
        headerTitle: 'Quotes'
    }
}

export default QuotesScreen;