import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity(() => ({
  backgroundColor: '#7EED5E',
  width: 128,
  height: 70,
  borderRadius: 50,
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  bottom: 20,
  right: -5,
}));

export const Title = styled.Text(() => ({
  fontWeight: 'bold',
}));
