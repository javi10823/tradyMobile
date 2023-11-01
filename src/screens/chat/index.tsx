import React from 'react';
import UserCard from '../../components/userCard';
import ChatInput from '../../components/chatInput';
import ChatBubble from '../../components/chatBubble';
import {List, ListTitle, Wrapper} from './styles';
import {MESSAGESDATA} from './data';

export default function Chat() {
  const sectionItem = ({item}: any) => {
    return (
      <ChatBubble
        image={item.image}
        type={item.type}
        info={item.info}
        body={item.body}
        time={item.time}
      />
    );
  };

  return (
    <Wrapper>
      <UserCard />
      <Wrapper>
        <List
          sections={MESSAGESDATA}
          renderItem={sectionItem}
          renderSectionHeader={({section}: any) => (
            <ListTitle>{section.title}</ListTitle>
          )}
        />
      </Wrapper>

      <ChatInput />
    </Wrapper>
  );
}
