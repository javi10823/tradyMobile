import styled from 'styled-components/native';

export const Pressable = styled.TouchableHighlight(() => ({}));

export const Wrapper = styled.View(() => ({
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: 'white',
  marginVertical: 1,
  height: 61,
  paddingHorizontal: 16,
  paddingVertical: 20,
}));

export const Title = styled.Text(() => ({
  marginHorizontal: 8,
  flex: 1,
  fontFamily: 'Inter-Regular',
}));

export const Time = styled.Text(() => ({
  fontFamily: 'Inter-Light',
}));

export const Notification = styled.View(() => ({
  backgroundColor: '#7A5AF8',
  borderRadius: 50,
  width: 8,
  height: 8,
  marginLeft: 8,
}));
