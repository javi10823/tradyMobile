import React from 'react';
import {
  BulletPoints,
  Connector,
  Content,
  InfoWrapper,
  PoweredBy,
  Title,
  Wrapper,
} from './styles';

export default function CallSummary() {
  return (
    <Wrapper>
      <Connector />
      <Content>
        <InfoWrapper>
          <Title>Call summary</Title>
          <PoweredBy>Powered by Trady AI</PoweredBy>
        </InfoWrapper>
        <BulletPoints>
          {'• Luciana called about a problem with X.'}
        </BulletPoints>
        <BulletPoints>
          {'• You agreed that the visit would take place on Thursday at 8 am'}
        </BulletPoints>
      </Content>
    </Wrapper>
  );
}
