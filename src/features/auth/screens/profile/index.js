import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import InfoCard from '../../components/profile.component/info-card';
import InfoProfile from '../../components/profile.component/info-profile';
import ButtonLogOut from '../../components/profile.component/ButtonLogOut';
import {Theme, WidthScreen, HeightScreen} from '@common/theme';

const Profile = () => {
  const arrInfoCard = [
    {nameIcon: 'basket-outline', name: 'Orders'},
    {nameIcon: 'newspaper-outline', name: 'My Details'},
    {nameIcon: 'ios-location-outline', name: 'Delivery Address'},
    {nameIcon: 'ios-card-outline', name: 'Payment Methods'},
    {nameIcon: 'ios-barcode-outline', name: 'Promo Card'},
    {nameIcon: 'notifications-outline', name: 'Notifications'},
    {nameIcon: 'ios-help-circle-outline', name: 'Help'},
    {nameIcon: 'ios-alert-circle-outline', name: 'About'},
  ];

  return (
    <View style={styles.root}>
      <FlatList
        data={arrInfoCard}
        renderItem={({item}) => {
          return <InfoCard nameIcon={item.nameIcon} name={item.name} />;
        }}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={InfoProfile}
        ListFooterComponent={ButtonLogOut}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    // backgroundColor: 'red',
    // marginBottom: 70,
    paddingBottom: HeightScreen * 0.09,
  },
});
