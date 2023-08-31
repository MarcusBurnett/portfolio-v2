import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import { formatDuration } from '../utilities';
import { xsmall } from '../styles/breakpoints';

const Text = styled.span`
  font-size: 1.4rem;
  font-weight: 700;

  @media screen and (max-width: ${xsmall}) {
    font-size: 1.8rem;
  }
`;

const Letter = styled(Text)`
  width: 0.9rem;
  display: flex;
  justify-content: center;

  @media screen and (max-width: ${xsmall}) {
    width: 1.1rem;
  }
`;

const DurationUnit = styled(Text)`
  margin-right: 0.4rem;

  :last-child {
    margin-right: 0;
  }
`;

const Container = styled.div`
  display: flex;
`;

const formatDurationItem = (item) =>
  [...item].map((letter, i) => {
    const key = i.toString();

    return <Letter key={key}>{letter}</Letter>;
  });

function Countdown({ date }) {
  const [duration, setDuration] = useState(formatDuration(date));

  useEffect(() => {
    const interval = setInterval(() => {
      setDuration(formatDuration(date));
    }, 1000);

    return () => clearInterval(interval);
  }, [date]);

  return (
    <Container>
      {formatDurationItem(duration.years)}
      <DurationUnit>y</DurationUnit>
      {formatDurationItem(duration.months)}
      <DurationUnit>m </DurationUnit>
      {formatDurationItem(duration.days)}
      <DurationUnit>d </DurationUnit>
      {formatDurationItem(duration.hours)}
      <DurationUnit>h </DurationUnit>
      {formatDurationItem(duration.minutes)}
      <DurationUnit>mins </DurationUnit>
      {formatDurationItem(duration.seconds)}
      <DurationUnit>s</DurationUnit>
    </Container>
  );
}

export default Countdown;
