import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { connect } from 'react-redux';
import { StatusBar, View } from 'react-native';
import { MainRoute } from './src/route'
import { Loader } from './src/utility/Loader';
import { SnakeBar } from './src/constants/SnakeBar';


function App({ appStatus, loading }) {
  console.log(appStatus);
  console.log(loading);
  return (
    <View style={{ flex: 1 }}>
      <MainRoute appStatus={appStatus} />
      <SnakeBar />
      <StatusBar
        animated={true}
        backgroundColor="black"
      />
      {loading && <Loader />}
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    appStatus: state.app.appStatus,
    loading: state.app.loader,
  }
}

export default connect(mapStateToProps, {})(App);