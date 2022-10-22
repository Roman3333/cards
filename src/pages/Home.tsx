import React from 'react';

import Ads from '../components/Ads';

import styled from 'styled-components';

//Styles
const Section = styled.section`
  margin-top: 25px;
`;

const Container = styled.div`
  max-width: 998px;
  margin: 0 auto;
  padding: 0 15px;
`;

const Home = () => {
  return (
    <Section>
      <Container>
        <Ads />
      </Container>
    </Section>
  );
};

export default Home;
