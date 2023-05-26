import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './RootNavigation';
import { AuthNavigation, SplashRoute, StackNavigation } from './StackNavigation';
import { colors } from '../styles/colors';
export const hideHeader = { headerShown: false };

const AppNavigation = ({ appStatus }) => {
  switch (appStatus) {
    case 0:
      return <SplashRoute />;
    case 1:
      return <AuthNavigation />;
    case 2:
      return <StackNavigation />;
    default:
      return <AuthNavigation />;
  }
};

export const MainRoute = ({ appStatus }) => {
  return (
    <NavigationContainer ref={navigationRef} theme={{ colors: { background: colors.white } }}  >
      <AppNavigation appStatus={appStatus} />
    </NavigationContainer>
  );
};

// const mapStateToProps = (state) => {
//   console.log(state);
//   return {
//     status: state?.AppReducer?.appStatus,
//   };
// };

// export default connect(mapStateToProps, {})(MainRoute);
