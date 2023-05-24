import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { connect } from 'react-redux';
// import {spinner} from './src/components/'
import { StatusBar } from 'react-native';
import { Navigator } from './src/route'


function App({ appStatus, loading }) {
  return (
    <NavigationContainer >
      <Navigator appStatus={appStatus} />
      <StatusBar
        animated={true}
        backgroundColor="black"
      />
      {/* {loading && <Spinner />} */}
    </NavigationContainer>
  );
}

const mapStateToProps = (state) => {
  return {
    appStatus: state.app.appStatus,
    loading: state.app.loading,
  }
}


export default connect(mapStateToProps, {})(App);