import React from 'react';

import { LoginProvider } from './src/components/LoginLink';

export const wrapRootElement = ({ element }) => <LoginProvider>{element}</LoginProvider>;
