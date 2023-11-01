import styled from 'styled-components/native';

export const Wrapper = styled.View(() => ({
  backgroundColor: '#F4F5F7',
  flexDirection: 'row',
  alignItems: 'center',
  paddingHorizontal: 12,
  paddingVertical: 8,
  marginBottom: 8,
  borderRadius: 6,
}));

export const ControllButton = styled.TouchableOpacity(() => ({}));

export const Icon = styled.Image(() => ({}));

export const ProgressContainer = styled.View(() => ({
  flex: 1,
  backgroundColor: '#CEE8D6',
  height: 4,
  marginRight: 12,
  marginLeft: 4,
}));

export const ProgressBar = styled.View(() => ({
  backgroundColor: '#5AB277',
  height: 4,
}));

export const Timer = styled.Text(() => ({
  color: '#5AB277',
}));
