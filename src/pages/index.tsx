import React from 'react';
import styled from 'styled-components';

const Teste = styled.h1`
  font-size: 6.7rem;
  color: red;
`;

const Home: React.FC = () => {
  return (
    <div>
      <Teste>Hi</Teste>
    </div>
  );
};

export default Home;
