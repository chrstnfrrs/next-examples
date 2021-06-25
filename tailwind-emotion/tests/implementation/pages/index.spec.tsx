import * as React from 'react';
import * as RTL from '@testing-library/react';
import '@testing-library/jest-dom';
// import * as Apollo from '@apollo/client';
// import Chance from 'chance';

// UI Imports
import HomePage from '../../../pages';
// import * as Types from '../../types/index.d';
// Static Prop Imports
// import * as GraphqlClient from '../../graphql/graphql-client';
// import * as ApolloFactory from '../model-factories/apollo';

describe('When visiting HomePage', () => {
  beforeEach(() => {
    RTL.render(<HomePage />);
  });
  test('Then should be true', () => {
    expect(RTL.screen.getByText('Hello World')).toBeVisible();
  });
});
