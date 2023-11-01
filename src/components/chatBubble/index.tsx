import React from 'react';
import {
  Body,
  Bubble,
  ContentContainer,
  Icon,
  InfoContainer,
  InfoText,
  Time,
  Triangle,
  TypeText,
} from './styles';
import {ChatBubbleProps} from './types';
import CallSummary from '../callSummary';
import Player from '../player';

export default function ChatBubble({
  image,
  type,
  info,
  body,
  time,
}: ChatBubbleProps) {
  return (
    <Bubble>
      <Triangle />
      <ContentContainer>
        <InfoContainer>
          <Icon source={image} />
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
