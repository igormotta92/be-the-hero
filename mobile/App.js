import React from 'react';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import Routes from './src/routes'

export default function App() {
  return (
    <Routes />
  );
}

/*
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello OmniStack</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/