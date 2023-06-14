import React from 'react';
import { PageNotFd } from './PageNotFound.styled';
import { Container } from 'components/Layout/Layout.styled';

const PageNotFound = () => {
  return (
    <PageNotFd>
      <Container>
        <h1>404</h1>
        <p>Page not found...</p>
      </Container>
    </PageNotFd>
  );
};

export default PageNotFound;
