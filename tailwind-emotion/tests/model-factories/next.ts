import { GetStaticPathsContext } from 'next';

const createRandomGetStaticPathsContext = (): GetStaticPathsContext => ({
  defaultLocale: undefined,
  locales: undefined,
});

export { createRandomGetStaticPathsContext };
