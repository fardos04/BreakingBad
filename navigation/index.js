import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';



import CharactersScreen,{screenOptions as CharactersScreenOptions} from '../screens/Characters';
import CharacterScreen,{screenOptions as CharacterScreenOptions} from '../screens/Characters/Character';
import CharacterDetailsScreen,{screenOptions as CharacterDetailsOptions} from '../screens/Characters/CharacterDetails';

import EpisodesScreen,{screenOptions as EpisodesScreenOptions} from '../screens/Episodes';
import EpisodeScreen,{screenOptions as EpisodeScreenOptions} from '../screens/Episodes/Episode';

import QuotesScreen,{screenOptions as QuotesScreenOptions} from '../screens/Quotes';
import QuoteScreen,{screenOptions as QuoteScreenOptions} from '../screens/Quotes/Quote';

const CharactersStackNavigator = createStackNavigator();
export const CharactersStack = ()=>{
    return(
        <CharactersStackNavigator.Navigator>
            <CharactersStackNavigator.Screen name='Characters' component={CharactersScreen} options={CharactersScreenOptions}/>
            <CharactersStackNavigator.Screen name='Character'  component={CharacterScreen}  options={CharacterScreenOptions}/>
            <CharactersStackNavigator.Screen name='CharacterDetails'  component={CharacterDetailsScreen}  options={CharacterDetailsOptions}/>
         </CharactersStackNavigator.Navigator>)
}

const EpisodesStackNavigator = createStackNavigator();
export const EpisodesStack = ()=>{
    return(
        <EpisodesStackNavigator.Navigator>
            <EpisodesStackNavigator.Screen name='Episodes' component={EpisodesScreen} options={EpisodesScreenOptions}/>
            <EpisodesStackNavigator.Screen name='Episode' component={EpisodeScreen} options={EpisodeScreenOptions}/>
         </EpisodesStackNavigator.Navigator>)
}

const QuotesStackNavigator = createStackNavigator();
export const QuotesStack = ()=>{
    return(
        <QuotesStackNavigator.Navigator>
            <QuotesStackNavigator.Screen name='Quotes' component={QuotesScreen} options={QuotesScreenOptions}/>
            <QuotesStackNavigator.Screen name='Quote'  component={QuoteScreen}  options={QuoteScreenOptions}/>
         </QuotesStackNavigator.Navigator>)
}

const AppBottomBarNavigator = createMaterialBottomTabNavigator();
export const AppBottomBar = ()=>{
    return(
        <AppBottomBarNavigator.Navigator activeColor='#ffffff' inactiveColor='#222222' barStyle={{ backgroundColor:'#0B610B' }}>
            <AppBottomBarNavigator.Screen 
            options =
            {
                {
                    tabBarLabel :'Characters',
                    tabBarIcon:({focused,color,size}) => {
                        const iconShape = focused ? 'people' : 'people-outline';
                        const iconColor = focused ? '#ffffff' : '#222222';
                        const iconSize = focused ? 28 : 26;
                        return(
                            <Ionicons name={iconShape} color={iconColor} size={iconSize}/>
                        )
                    }
                }
            }
            name='Characters' 
            component = {CharactersStack} />
            
            <AppBottomBarNavigator.Screen 
            options =
            {
                {
                    tabBarLabel :'Episodes',
                    tabBarIcon:({focused,color,size}) => {
                        const iconShape = focused ? 'tv' : 'tv-outline';
                        const iconColor = focused ? '#ffffff' : '#222222';
                        const iconSize = focused ? 28 : 26;
                        return(
                            <Ionicons name={iconShape} color={iconColor} size={iconSize}/>
                        )
                    }
                }
            }
            name='Episodes' 
            component = {EpisodesStack} />

<AppBottomBarNavigator.Screen 
            options =
            {
                {
                    tabBarLabel :'Quotes',
                    tabBarIcon:({focused,color,size}) => {
                        const iconShape = focused ? 'comment-quote' : 'comment-quote-outline';
                        const iconColor = focused ? '#ffffff' : '#222222';
                        const iconSize = focused ? 28 : 26;
                        return(
                            <MaterialCommunityIcons name={iconShape} color={iconColor} size={iconSize}/>
                        )
                    }
                }
            }
            name='Quotes' 
            component = {QuotesStack} />
            </AppBottomBarNavigator.Navigator>
    )
}