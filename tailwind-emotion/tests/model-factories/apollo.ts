import * as Apollo from '@apollo/client';

import * as Types from '../../types/index.d';

const createClient = (
  query?: Types.TSFixMe,
): Apollo.ApolloClient<Apollo.NormalizedCache> =>
  ({
    query: query || jest.fn(),
  } as Apollo.ApolloClient<Apollo.NormalizedCache>);

export { createClient };
