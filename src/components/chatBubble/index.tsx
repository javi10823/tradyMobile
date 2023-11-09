import React from 'react';
import {
  Body,
  Bubble,
  ContentContainer,
  InfoContainer,
  InfoText,
  Time,
  Triangle,
  TypeText,
} from './styles';
import {ChatBubbleProps} from './types';
import CallSummary from '../callSummary';
import Player from '../player';
// @ts-ignore
import Call from '../../assets/call.svg';
// @ts-ignore
import Message from '../../assets/message.svg';

export default function ChatBubble({type, info, body, time}: ChatBubbleProps) {
  return (
    <Bubble>
      <Triangle />
      <ContentContainer>
        <InfoContainer>
          {type === 'Incoming Call' ? <Call /> : <Message />}
          <TypeText>{type}</TypeText>
          <InfoText>{info}</InfoText>
        </InfoContainer>
        {type === 'Incoming Call' && <Player />}

        {type === 'Incoming Call' && <CallSummary />}
        {type !== 'Incoming Call' && <Body>{body}</Body>}
        <Time>{time}</Time>
      </ContentContainer>
    </Bubble>
  );
}
