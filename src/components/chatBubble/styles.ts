import styled from 'styled-components/native';

export const Bubble = styled.View(() => ({
  flexDirection: 'row',
  marginHorizontal: 8,
  marginTop: 12,
  marginBottom: 16,
}));

export const Triangle = styled.View(() => ({
  width: 0,
  height: 0,
  backgroundColor: 'transparent',
  borderStyle: 'solid',
  borderRightWidth: 10,
  borderTopWidth: 10,
  borderRightColor: 'transparent',
  borderTopColor: 'white',
  transform: 'rotate(90deg)',
}));

export const ContentContainer = styled.View(() => ({
  backgroundColor: 'white',
  flex: 1,
  borderTopRightRadius: 6,
  borderBottomRightRadius: 6,
  borderBottomLeftRadius: 6,
  padding: 8,
}));

export const InfoContainer = styled.View(() => ({
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 8,
}));

export const TypeText = styled.Text(() => ({
  marginLeft: 8,
  flex: 1,
  fontFamily: 'Inter-Bold',
}));

export const InfoText = styled.Text(() => ({
  fontFamily: 'Inter-Light',
}));

export const Body = styled.Text(() => ({
  fontFamily: 'Inter-Regular',
}));

export const Time = styled.Text(() => ({
  alignSelf: 'flex-end',
  marginTop: 10,
  color: '#6B6B6B',
  fontFamily: 'Inter-Light',
}));
