import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { connect } from 'react-redux';
import { StatusBar, View } from 'react-native';
import { MainRoute } from './src/route'
import { Loader } from './src/utility/Loader';


function App({ appStatus, loading }) {
  console.log(appStatus);
  return (
    <View style={{ flex: 1 }}>
      <MainRoute appStatus={appStatus} />
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
    loading: state.app.loading,
  }
}

export default connect(mapStateToProps, {})(App);