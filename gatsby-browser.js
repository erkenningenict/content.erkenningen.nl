import React from 'react';

import { LoginProvider } from './src/components/LoginLink';

window.ERKENNINGEN_SITE_TYPE = 'content';

export const wrapRootElement = ({ element }) => <LoginProvider>{element}</LoginProvider>;
