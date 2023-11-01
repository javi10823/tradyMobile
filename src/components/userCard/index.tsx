import React from 'react';
import {Arrow, Button, Name, UserIcon} from './styles';

export default function UserCard() {
  return (
    <Button>
      <UserIcon source={require('../../assets/user.png')} />
      <Name>Jonnathan Wu</Name>
      <Arrow source={require('../../assets/arrow-right.png')} />
    </Button>
  );
}
