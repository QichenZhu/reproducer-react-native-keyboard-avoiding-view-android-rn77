import React from 'react';
import {TextInput, View, KeyboardAvoidingView} from 'react-native';

export default () => (
  <KeyboardAvoidingView behavior="padding" style={{flex: 1}}>
    <View
      style={{flex: 1, justifyContent: 'center', backgroundColor: 'yellow'}}>
      <TextInput placeholder="Tap here to open keyboard" />
    </View>
  </KeyboardAvoidingView>
);
