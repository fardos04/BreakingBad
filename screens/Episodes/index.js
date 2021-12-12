import React,{useState} from 'react';
import {View,Text,TouchableOpacity,FlatList, ScrollView} from 'react-native';
import Style from '../../utilty/appStyle';
import Episode from '../Episodes/Episode';


const EpisodesScreen = () =>{
    const baseUrl = 'https://www.breakingbadapi.com/api/episodes';
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
                      keyExtractor={item => item.episode_id}
                      renderItem={episodeItem => <Episode 
                        episode = {episodeItem.item}
                        
                        />}
                    />
              </View>
              <View >
                <TouchableOpacity  style={Style.btnContainer} onPress={getData}>
                  <Text>Episodes</Text>
                </TouchableOpacity>
              </View>
            </View>
    </ScrollView>
  );
}

export const screenOptions=navData=>{
    return{
        headerTitle: 'Episodes'
    }
}

export default EpisodesScreen;