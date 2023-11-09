import styled from 'styled-components/native';

export const Wrapper = styled.View(() => ({
  flexDirection: 'row',
}));

export const Connector = styled.View(() => ({
  width: 0,
  height: 0,
  backgroundColor: 'transparent',
  borderStyle: 'solid',
  borderRightWidth: 10,
  borderTopWidth: 10,
  borderRightColor: 'transparent',
  borderTopColor: 'white',
  borderBottomWidth: 3,
  borderLeftWidth: 3,
  borderBottomLeftRadius: 5,
  borderBottomColor: '#C2C2C2',
  borderLeftColor: '#C2C2C2',
}));

export const Content = styled.View(() => ({
  borderWidth: 1,
  borderRadius: 6,
  borderColor: '#DADDE2',
  padding: 8,
}));

export const InfoWrapper = styled.View(() => ({
  flexDirection: 'row',
}));

export const Title = styled.Text(() => ({
  marginRight: 8,
  marginBottom: 8,
  fontFamily: 'Inter-Bold',
}));

export const PoweredBy = styled.Text(() => ({
  color: '#7A5AF8',
  fontFamily: 'Inter-Regular',
}));

export const BulletPoints = styled.Text(() => ({
  fontFamily: 'Inter-Regular',
}));
