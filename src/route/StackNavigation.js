import React from 'react';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { hideHeader } from '.';
import { colors } from '../styles/colors';
import { fonts } from '../styles/CommonStyling';
import { CustomBackButton } from '../components/Custom/CustomFields';
import SplashScreen from '../screens/SplashScreen';
import AuthScreen from '../screens/Auth/LoginScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from '../screens/Auth/SignUpScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
import SelectOptionsScreen from '../screens/User/SelectOptionsScreen';
import QuestionariesScreen from '../screens/User/QuesionariesScreen';
import { CrossSvgComponent } from '../assets/svg/AppSvg';
import ResultScreen from '../screens/User/ResultScreen';

const Stack = createStackNavigator();
const cardStyle = { cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }

export const StackNavigation = () => (
  <Stack.Navigator
    screenOptions={{
      ...cardStyle,
    }}
  >
    <Stack.Screen name="Options" component={SelectOptionsScreen} options={{ ...hideHeader }} />
    <Stack.Screen
      name="Questions"
      component={QuestionariesScreen}
      options={
        ({ route }) => ({
          title: route.params.title,
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerRight: () => <CustomBackButton />,
          headerShadowVisible: false,
          headerTintColor: 'white',
          headerLeft: null
        })

      }
    />
    <Stack.Screen name="Result" component={ResultScreen} options={{ ...hideHeader }} />
  </Stack.Navigator>
);

export const AuthNavigation = () => (
  <Stack.Navigator screenOptions={{ ...hideHeader, ...cardStyle }}>
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Signup" component={SignUpScreen} />
  </Stack.Navigator>
);

export const SplashRoute = () => (
  <Stack.Navigator screenOptions={{ ...hideHeader, ...cardStyle }}>
    <Stack.Screen name="Splash" component={SplashScreen} />
  </Stack.Navigator>
);

export const HeaderOptions = ({ title, showLeftHeader = true }) => {
  if (showLeftHeader == true) {
    return {
      headerTitle: title,
      headerTitleStyle: {
        fontFamily: fonts.medium,
        fontSize: 17,
      },
      headerTitleAlign: 'center',
      headerTintColor: colors.white,
      headerStyle: {
        backgroundColor: colors.primary,
      },
      headerLeft: () => <CustomBackButton />,
    };
  }
  return {
    headerTitle: title,
    headerTitleStyle: {
      fontFamily: fonts.medium,
      fontSize: 17,
    },
    headerTitleAlign: 'center',
    headerTintColor: colors.white,
    headerStyle: {
      backgroundColor: colors.primary,
    },
    headerLeft: () => {
      return false;
    },
  };
};
