import React,{useState} from 'react';
import {View,Text,TouchableOpacity,FlatList, ScrollView} from 'react-native';
import Style from '../../utilty/appStyle';
import Character from '../Characters/Character';




const CharactersScreen = () =>{
    const baseUrl = 'https://www.breakingbadapi.com/api/characters';
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
              <View > 
                    <FlatList 
                      data={serverData}
                      keyExtractor={item => item.char_id}
                      renderItem={characterItem => <Character 
                      char = {characterItem.item}
                      />}
                    />
              </View>
              <View >
                <TouchableOpacity  style={Style.btnContainer}  onPress={getData}>
                  <Text>Characters</Text>
                </TouchableOpacity>
              </View>
            </View>
    </ScrollView>
  );
}

export const screenOptions=navData=>{
    return{
        headerTitle: 'Characters'
    }
}

export default CharactersScreen;