import  React from 'react';;
import { createDrawerNavigator,} from '@react-navigation/drawer';

import CharacterDetails from './screens/Characters/CharacterDetails';


const Drawer = createDrawerNavigator();

export const  DrawerNav = () => {

    return (
       <NavigationContainer> 
        <Drawer.Screen name="CharacterDetailsScreen" component={CharacterDetails} />
        </NavigationContainer>
    );
  }