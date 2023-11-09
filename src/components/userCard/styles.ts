import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity(() => ({
  flexDirection: 'row',
  alignItems: 'center',
  marginVertical: 8,
  marginHorizontal: 12,
  backgroundColor: 'white',
  padding: 12,
  borderRadius: 8,
}));

export const Name = styled.Text(() => ({
  flex: 1,
  marginLeft: 4,
  fontFamily: 'Inter-SemiBold',
}));

export const Arrow = styled.Image(() => ({}));
