import React from 'react';
import {AttachmentButton, Icon, Input, SendButton, Wrapper} from './styles';

export default function ChatInput() {
  return (
    <Wrapper>
      <AttachmentButton>
        <Icon source={require('../../assets/attachment.png')} />
      </AttachmentButton>
      <Input placeholder="Type Message" />
      <SendButton>
        <Icon source={require('../../assets/send.png')} />
      </SendButton>
    </Wrapper>
  );
}
