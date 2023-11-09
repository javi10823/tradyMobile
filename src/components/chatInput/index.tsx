import React from 'react';
import {AttachmentButton, Input, SendButton, Wrapper} from './styles';
// @ts-ignore
import Attachment from '../../assets/attachment.svg';
// @ts-ignore
import Send from '../../assets/send.svg';

export default function ChatInput() {
  return (
    <Wrapper>
      <AttachmentButton>
        <Attachment />
      </AttachmentButton>
      <Input placeholder="Type Message" />
      <SendButton>
        <Send />
      </SendButton>
    </Wrapper>
  );
}
