import React from 'react';
import {HeaderButton, TextButton, Wrapper} from './styles';

export default function ChatsNavigator({isChat}: any) {
  return (
    <Wrapper>
      <HeaderButton>
        <TextButton>{isChat ? 'Mark as Spam' : 'Archive'}</TextButton>
      </HeaderButton>
      <HeaderButton>
        <TextButton>Spam</TextButton>
      </HeaderButton>
    </Wrapper>
  );
}
