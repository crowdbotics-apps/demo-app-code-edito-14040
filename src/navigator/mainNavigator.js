import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen513253Navigator from '../features/BlankScreen513253/navigator';
import BlankScreen413247Navigator from '../features/BlankScreen413247/navigator';
import BlankScreen013188Navigator from '../features/BlankScreen013188/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen513253: { screen: BlankScreen513253Navigator },
BlankScreen413247: { screen: BlankScreen413247Navigator },
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
