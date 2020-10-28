import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen313375Navigator from '../features/BlankScreen313375/navigator';
import BlankScreen113369Navigator from '../features/BlankScreen113369/navigator';
import BlankScreen613347Navigator from '../features/BlankScreen613347/navigator';
import BlankScreen513253Navigator from '../features/BlankScreen513253/navigator';
import BlankScreen013188Navigator from '../features/BlankScreen013188/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen313375: { screen: BlankScreen313375Navigator },
BlankScreen113369: { screen: BlankScreen113369Navigator },
BlankScreen613347: { screen: BlankScreen613347Navigator },
BlankScreen513253: { screen: BlankScreen513253Navigator },
BlankScreen013188: { screen: BlankScreen013188Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
