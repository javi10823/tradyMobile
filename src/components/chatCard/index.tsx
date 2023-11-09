import React from 'react';
import {Notification, Pressable, Time, Title, Wrapper} from './styles';
import {ChatCardProps} from './types';
// @ts-ignore
import Call from '../../assets/call.svg';
// @ts-ignore
import Message from '../../assets/message.svg';
// @ts-ignore
import Sms from '../../assets/sms.svg';

export default function ChatCard({
  onPress,
  title,
  time,
  unread,
  type,
}: ChatCardProps) {
  const renderIcon = () => {
    switch (type) {
      case 'call':
        return <Call />;
      case 'sms':
        return <Sms />;
      case 'message':
        return <Message />;
      default:
        return null;
    }
  };

  return (
    <Pressable onPress={onPress} underlayColor="white">
      <Wrapper>
        {renderIcon()}
        <Title style={{}}>{title}</Title>
        <Time>{time}</Time>
        {unread && <Notification />}
      </Wrapper>
    </Pressable>
  );
}
