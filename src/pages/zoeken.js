import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Breadcrumb from './../components/Breadcrumb';
import FaqSidebar from '../components/FaqSidebar';
import Layout from '../components/layout';
import LoginLink from '../components/LoginLink';
import VerticalNavigationList from '../components/VerticalNavigationList';

const Zoeken = () => {
  const data = useStaticQuery(searchQuery);

  return (
    <Layout>
      <div className="container">
        <div className="row mb-2 mb-lg-5">
          <div className="col-md-1 mt-2 d-none d-lg-block navbar-be__breadcrumbs-spacer-orange" />
          <div className="col-md-2 mt-2 d-none d-lg-block navbar-be__breadcrumbs-spacer-green" />
          <div className="col-md-10 col-lg-7 mt-2 navbar-be__breadcrumbs-container d-none d-md-block">
            <Breadcrumb absolutePath={'/zoeken'} />
          </div>
          <div className="col-md-2 mt-2 spacer-green text-right navbar-be__breadcrumbs-menu">
            <LoginLink />
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 pl-0 pr-0 pl-lg-3 pr-md-3 pr-lg-5">
            <FaqSidebar />
          </div>
          <div className="col-md-9 px-sm-0 pl-md-0 mt-2 mt-md-0">
            <h1>Zoeken</h1>
            <p>Voer een trefwoord in om op de site te zoeken.</p>
            <VerticalNavigationList data={data} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const searchQuery = graphql`
  query ZoekenQuery {
    allMdx {
      edges {
        node {
          rawBody
          frontmatter {
            title
          }
          id
          slug
          excerpt
          headings {
            depth
            value
          }
        }
      }
    }
    localSearchPages {
      index
      store
    }
  }
`;

export default Zoeken;
