import styled from 'styled-components/macro';
import loadingSpinner from '../images/Icons/Light/icon-loading-spinner.svg';

const sizes = {
  small: '20px',
  medium: '30px',
  large: '40px',
};

const Spinner = styled.div`
  background-image: url(${loadingSpinner});
  background-repeat: no-repeat;
  background-position: center;
  background-size: ${({ size = 'small' }) => sizes[size]};
  height: ${({ size = 'small' }) => sizes[size]};
  width: 100%;
  opacity: 0.75;
  position: absolute;
`;

export default Spinner;
