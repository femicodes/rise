import React from 'react';
import { View, SafeAreaView, FlatList } from 'react-native';
import styles from './styles';
import PlanCard from '../../components/PlanCard';
import Header from '../../components/Header';
import planData from './data';

const YourPlans = ({ navigation }: ScreenProp) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header text="Your Plans" navigation={navigation} />

      <View>
        <FlatList
          numColumns={2}
          bounces={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.sectionContainer}
          data={planData}
          renderItem={({ item }) => (
            <PlanCard
              onPress={() => navigation.navigate('AddToPlan')}
              name={item.planName}
              image={item.image}
              amount={item.planAmount}
            />
          )}
          keyExtractor={(_, i) => i.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

export default YourPlans;
