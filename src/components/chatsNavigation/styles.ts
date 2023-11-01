import styled from 'styled-components/native';

export const Wrapper = styled.View(() => ({
  flexDirection: 'row',
}));

export const HeaderButton = styled.TouchableOpacity(() => ({
  marginHorizontal: 8,
}));

export const TextButton = styled.Text(() => ({
  color: '#6B6B6B',
  fontSize: 16,
}));
