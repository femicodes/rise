import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from './styles';

const arrowIcon = require('../../assets/icons/arrow-icon.png');

const Plans = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Plans</Text>
      </View>

      <View style={styles.planSectionContainer}>
        <Text style={styles.planSectionText}>Your plans</Text>
        <TouchableOpacity
          hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
          activeOpacity={0.5}
          style={styles.planSectionRight}>
          <Text style={styles.seePlansText}>See All Your Plans</Text>
          <Image source={arrowIcon} style={styles.arrowIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.planSlideContainer}>{}</View>
    </SafeAreaView>
  );
};

export default Plans;
