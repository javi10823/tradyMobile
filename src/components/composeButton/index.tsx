import React from 'react';
import {Button, Title} from './styles';
//@ts-ignore
import Write from '../../assets/write.svg';

export default function ComposeButton() {
  return (
    <Button>
      <Write />
      <Title>Compose</Title>
    </Button>
  );
}
