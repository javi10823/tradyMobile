import React from 'react';
import {Icon, Notification, Pressable, Time, Title, Wrapper} from './styles';
import {ChatCardProps} from './types';

export default function ChatCard({
  onPress,
  image,
  title,
  time,
  unread,
}: ChatCardProps) {
  return (
    <Pressable onPress={onPress} underlayColor="white">
      <Wrapper>
        <Icon source={image} />
        <Title style={{}}>{title}</Title>
        <Time>{time}</Time>
        {unread && <Notification />}
      </Wrapper>
    </Pressable>
  );
}
