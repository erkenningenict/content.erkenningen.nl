import 'whatwg-fetch';
import React from 'react';
import { ThemeContext } from '@erkenningen/ui/layout/theme';

import { LoginProvider } from './src/components/LoginLink';

window.ERKENNINGEN_GRAPHQL_API_URL = 'https://api.erkenningen.nl/graphql';

// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({ element }) => (
  <LoginProvider>
    <ThemeContext.Provider value={{ mode: 'content' }}>{element}</ThemeContext.Provider>
  </LoginProvider>
);
