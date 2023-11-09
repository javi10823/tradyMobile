import styled from 'styled-components/native';

export const Wrapper = styled.View(() => ({
  flexDirection: 'row',
  borderRadius: 42,
  backgroundColor: 'white',
  margin: 8,
  paddingVertical: 7,
  paddingHorizontal: 8,
  borderWidth: 1,
  borderColor: '#E1E3E7',
}));

export const AttachmentButton = styled.TouchableOpacity(() => ({
  borderWidth: 1,
  borderRadius: 50,
  padding: 10,
  borderColor: '#C2C2C2',
  width: 40,
  height: 40,
  alignItems: 'center',
  justifyContent: 'center',
}));

export const Input = styled.TextInput(() => ({
  flex: 1,
  marginLeft: 8,
}));

export const SendButton = styled.TouchableOpacity(() => ({
  backgroundColor: '#1771ED',
  borderRadius: 50,
  padding: 11,
}));
