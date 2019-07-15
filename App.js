import React from 'react';
import Router from './src/shared/router';
import styled from 'styled-components/native';
import { images } from './src/constants/images';
import { ActivityIndicator } from 'react-native';
import { cacheImages } from './src/utilities/cache_image';

import { Provider } from "react-redux";
import store from './src/shared/root.store';

const Container = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default class App extends React.Component {

  state = {
    isReady: false
  }

  componentDidMount() {
    this.cacheAssets();
  }

  cacheAssets = async () => {
    const imageAssets = cacheImages(Object.values(images));
    await Promise.all([...imageAssets]);

    this.setState({
      isReady: true
    });
  }

  render() {
    if (!this.state.isReady) {
      return (
          <Container>
            <ActivityIndicator size={"large"} />
          </Container>
      )
    }

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }

}