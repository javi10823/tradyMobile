import React from 'react';
import {Button, Name} from './styles';
// @ts-ignore
import ArrowRight from '../../assets/arrow-right.svg';
// @ts-ignore
import User from '../../assets/user.svg';

export default function UserCard() {
  return (
    <Button>
      <User />
      <Name>Jonnathan Wu</Name>
      <ArrowRight />
    </Button>
  );
}
