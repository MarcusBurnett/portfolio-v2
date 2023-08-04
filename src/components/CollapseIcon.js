import React from 'react';
import { styled } from 'styled-components';
import { useTheme } from '../context/theme';

const Container = styled.div`
  min-width: 1.8rem;
  height: 1.8rem;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: ${({ borderRadius }) => borderRadius};
  border: ${({ borderColor }) => `1px solid ${borderColor}`};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
`;

const Line = styled.div`
  width: 8px;
  height: 1px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  position: absolute;
  transition: all 0.3s ease;
`;

const Line2 = styled(Line)`
  transform: ${({ rotation }) => `rotate(${rotation})`};
`;

export default function CollapseIcon({ collapsed }) {
  const { theme } = useTheme();

  return (
    <Container
      borderRadius={theme.borderRadius.tooltip}
      backgroundColor={collapsed ? 'transparent' : theme.accent}
      borderColor={collapsed ? theme.color : theme.accent}
      className="collapseIcon"
    >
      <Line backgroundColor={collapsed ? theme.color : theme.backgroundColor} />
      <Line2
        rotation={collapsed ? '90deg' : '0'}
        backgroundColor={collapsed ? theme.color : theme.backgroundColor}
      />
    </Container>
  );
}
