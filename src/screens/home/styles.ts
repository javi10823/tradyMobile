import styled from 'styled-components/native';

export const Wrapper = styled.View(() => ({
  marginHorizontal: 16,
  flex: 1,
}));

export const List = styled.FlatList(() => ({
  borderRadius: 10,
}));

export const HiddenItemContainer = styled.View(() => ({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginVertical: 1,
  height: 61,
}));

export const Spambutton = styled.TouchableOpacity(() => ({
  backgroundColor: '#D92D20',
  height: 61,
  alignItems: 'flex-start',
  justifyContent: 'center',
  paddingLeft: 16,
  flex: 1,
}));

export const ArchiveButton = styled.TouchableOpacity(() => ({
  backgroundColor: '#5AB277',
  height: 61,
  flex: 1,
  alignItems: 'flex-end',
  justifyContent: 'center',
  paddingRight: 16,
}));

export const HiddenButtonText = styled.Text(() => ({
  color: 'white',
  fontFamily: 'Inter-Regular',
}));
