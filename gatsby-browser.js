import React from 'react';
import { ThemeContext } from '@erkenningen/ui';

import { LoginProvider } from './src/components/LoginLink';

export const wrapRootElement = ({ element }) => (
  <LoginProvider>
    <ThemeContext.Provider value={{ mode: 'content' }}>{element}</ThemeContext.Provider>
  </LoginProvider>
);
