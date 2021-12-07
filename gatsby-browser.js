import 'whatwg-fetch';
import React from 'react';

import { LoginProvider } from './src/components/LoginLink';
import { MDXProvider } from '@mdx-js/react';
import Link from './src/components/Link';
import LinkButton from './src/components/LinkButton';
import LinkButtonContainer from './src/components/LinkButtonContainer';
import Redirect from './src/components/Redirect';
import ModuleLoader from './src/components/ModuleLoader';

const shortcodes = { a: Link, LinkButton, LinkButtonContainer, Redirect, ModuleLoader };

if (typeof window !== 'undefined') {
  window.ERKENNINGEN_GRAPHQL_API_URL = 'https://api.erkenningen.nl/graphql';
}

// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({ element }) => (
  <MDXProvider components={shortcodes}>
    <LoginProvider>{element}</LoginProvider>
  </MDXProvider>
);
