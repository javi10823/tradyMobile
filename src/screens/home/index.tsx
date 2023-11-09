import React from 'react';
import ChatCard from '../../components/chatCard';
import ComposeButton from '../../components/composeButton';
import {
  ArchiveButton,
  HiddenButtonText,
  HiddenItemContainer,
  Spambutton,
  Wrapper,
} from './styles';
import {CHATSDATA} from './data';
import {SwipeListView} from 'react-native-swipe-list-view';

export default function Home({navigation}: any) {
  const listItem = ({item, index}: any) => {
    return (
      <ChatCard
        key={index}
        onPress={() => navigation.navigate('Chat')}
        type={item.type}
        title={item.title}
        time={item.time}
        unread={item.unread}
      />
    );
  };

  return (
    <Wrapper>
      <SwipeListView
        leftOpenValue={75}
        rightOpenValue={-75}
        data={CHATSDATA}
        renderItem={listItem}
        renderHiddenItem={() => (
          <HiddenItemContainer style={{}}>
            <Spambutton style={{}}>
              <HiddenButtonText>Spam</HiddenButtonText>
            </Spambutton>
            <ArchiveButton>
              <HiddenButtonText>Archive</HiddenButtonText>
            </ArchiveButton>
          </HiddenItemContainer>
        )}
        leftActivationValue={200}
        rightActivationValue={-200}
        onLeftAction={() => {
          console.log('Send to spam');
        }}
        onRightAction={() => {
          console.log('Send to Archive');
        }}
      />
      <ComposeButton />
    </Wrapper>
  );
}
