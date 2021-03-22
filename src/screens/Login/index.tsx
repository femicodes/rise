import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { showMessage } from 'react-native-flash-message';
import RiseInput from '../../components/RiseInput';
import RiseButton from '../../components/RiseButton';
import { loginSchema } from '../../utils/schema';
import styles from './styles';

const Login = ({ navigation }: ScreenProp) => {
  const [showPassword, setShowPassword] = useState(true);
  const [details, setDetails] = useState({
    email: '',
    password: '',
  });

  const changeHandler = (value: string, fieldName: string) => {
    setDetails(prevDetails => ({
      ...prevDetails,
      [fieldName]: value,
    }));
  };

  const loginUser = async () => {
    try {
      await loginSchema.validateAsync(details);
      navigation.replace('Main');
    } catch (error) {
      return showMessage({
        message: 'Error',
        description: error.message,
        type: 'danger',
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'position' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 20 : 0}>
        <ScrollView>
          <View style={styles.headingContainer}>
            <Text style={styles.headingText}>Welcome back</Text>
          </View>
          <View style={styles.subHeaderContainer}>
            <Text style={styles.subHeaderText}>
              Let’s get you logged in to get back to building your
              dollar-denominated investment portfolio.
            </Text>
          </View>

          <View style={styles.inputContainer}>
            <View>
              <RiseInput
                onChangeText={(text: string) => changeHandler(text, 'email')}
                placeholder="Email Address"
                autoCapitalize="none"
                keyboardType="email-address"
              />
            </View>
            <View style={styles.passwordContainer}>
              <RiseInput
                onChangeText={(text: string) => changeHandler(text, 'password')}
                placeholder="Password"
                type="password"
                autoCapitalize="none"
                onTogglePassword={() => setShowPassword(!showPassword)}
                secureTextEntry={showPassword}
                label="Password"
                autoCorrect={false}
              />
            </View>
          </View>

          <View style={styles.signInButton}>
            <RiseButton onPress={loginUser} text="Sign In" />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;
