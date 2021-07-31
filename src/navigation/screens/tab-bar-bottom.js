import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Theme, WidthScreen, HeightScreen} from '@common/theme';
import Icon from 'react-native-vector-icons/AntDesign';
import TabBarIcon from '../components/tab-bar-icon';
import {Router} from '../router';

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}
function DetailsScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Deatil Screen</Text>
    </View>
  );
}
const TabBarBottom = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      tabBarOptions={{
        keyboardHidesTabBar: true,
        iconStyle: {width: 100},
        style: {
          backgroundColor: Theme.backgrounds.white,
          paddingBottom: 15,
          paddingVertical: 10,
          height: HeightScreen * 0.09,
          borderTopEndRadius: 25,
          borderTopStartRadius: 25,
          position: 'absolute',
          paddingHorizontal: 8,
        },
        showLabel: false,
        showIcon: true,
      }}>
      <Tab.Screen
        name={Router.Shop}
        component={HomeScreen}
        showIcon={true}
        options={{
          tabBarIcon: ({focused}) => (
            <TabBarIcon name={Router.Shop} focused={focused} />
          ),
          //   tabBarVisible: false,
        }}
      />
      <Tab.Screen
        name={Router.Explore}
        component={DetailsScreen}
        showIcon={true}
        options={{
          tabBarIcon: ({focused}) => (
            <TabBarIcon name={Router.Explore} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name={Router.Cart}
        component={DetailsScreen}
        showIcon={true}
        options={{
          tabBarIcon: ({focused}) => (
            <TabBarIcon name={Router.Cart} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name={Router.Heart}
        component={DetailsScreen}
        showIcon={true}
        options={{
          tabBarIcon: ({focused}) => (
            <TabBarIcon name={Router.Heart} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name={Router.Profile}
        component={DetailsScreen}
        showIcon={true}
        options={{
          tabBarIcon: ({focused}) => (
            <TabBarIcon name={Router.Profile} focused={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabBarBottom;

const styles = StyleSheet.create({});
