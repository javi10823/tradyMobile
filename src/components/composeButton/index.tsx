import React from 'react';
import {Button, Icon, Title} from './styles';

export default function ComposeButton() {
  return (
    <Button>
      <Icon source={require('../../assets/write.png')} />
      <Title>Compose</Title>
    </Button>
  );
}
