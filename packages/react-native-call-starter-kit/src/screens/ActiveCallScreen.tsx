import React, {useCallback} from 'react';
import {ActiveCall, useActiveCall} from '@stream-io/video-react-native-sdk';
import {ActivityIndicator, StyleSheet} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationStackParamsList} from '../types';

type Props = NativeStackScreenProps<
  NavigationStackParamsList,
  'ActiveCallScreen'
>;

export function ActiveCallScreen({navigation}: Props) {
  const activeCall = useActiveCall();

  const onOpenCallParticipantsInfoViewHandler = useCallback(() => {
    navigation.navigate('CallParticipantsInfoScreen');
  }, [navigation]);

  if (!activeCall) {
    return <ActivityIndicator size={'large'} style={StyleSheet.absoluteFill} />;
  }
  return (
    <ActiveCall
      onOpenCallParticipantsInfoView={onOpenCallParticipantsInfoViewHandler}
    />
  );
}
