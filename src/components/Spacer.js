import styled from 'styled-components/macro';

const sizes = {
  xs: '0.4rem',
  s: '1rem',
  m: '1.6rem',
  l: '2rem',
  xl: '2.4rem',
  xxl: '3rem',
  xxxl: '4rem',
};

const Spacer = styled.div`
  width: 100%;
  height: ${({ size = 'xs' }) => sizes[size]};
`;

export default Spacer;
