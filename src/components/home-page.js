import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import LoginLink from '../components/LoginLink';

import mol from '../../static/img/1.Mol.jpg';
import graan from '../../static/img/2.Graan.jpg';
import rat from '../../static/img/3.Rat.jpg';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from "@mdx-js/react";
import { LinkButton, LinkButtonContainer } from '@erkenningen/ui/components/link-button';

const shortcodes = { Link, LinkButton, LinkButtonContainer };

export default function Test()  {
  const data = useStaticQuery(homePageQuery);
  console.log('#DH# data', data );
  const {mdx} = data;
  return (
    <Layout>
      <div className="container"> 
    <div className="row">
    <div className="col p-0">
      <div className="mt-1 mr-3 spacer-green float-right text-right navbar-be__breadcrumbs-menu">
        <LoginLink />
      </div>
      <div className="greenContainer">
        <Link to="/licenties">
          <h1>Licenties voor groene en agrarische beroepen</h1>
        </Link>
        <p>
          <Link to="/licenties/wetten-en-regels">
            Voor het gebruik van professionele chemische middelen bij{' '}
          </Link>
          <Link to="/licenties/welke-licenties-zijn-er/gewasbescherming">
            gewasbescherming
          </Link>{' '}
          en het bestrijden van{' '}
          <Link to="/licenties/welke-licenties-zijn-er/knaagdierbeheersing">knaagdieren</Link>
          ,{' '}
          <Link to="/licenties/welke-licenties-zijn-er/bestrijding-mollen-en-woelratten">
            mollen en woelratten
          </Link>
          .
        </p>
      </div>
      <div className="imagesContainer">
        <section>
          <Link to="/licenties/welke-licenties-zijn-er/bestrijding-mollen-en-woelratten">
            <p>Mollen en woelratten</p>
            <img src={mol} alt="Mollen en woelratten bestrijding" />
          </Link>
        </section>
        <section>
          <Link to="/licenties/welke-licenties-zijn-er/gewasbescherming">
            <p>Gewasbescherming</p>
            <img src={graan} alt="Gewasbescherming" />
          </Link>
        </section>
        <section>
          <Link to="/licenties/welke-licenties-zijn-er/knaagdierbeheersing">
            <p>Knaagdierbeheersing: KBA</p>
            <img src={rat} alt="Knaagdierbeheersing: KBA" />
          </Link>
        </section>
      </div>
      <div className="container homeButtons"> 
      <MDXProvider components={shortcodes}>
              <MDXRenderer frontmatter={mdx.frontmatter}>{mdx.body}</MDXRenderer>
            </MDXProvider> 
           </div> 
    </div>
  </div></div>
  </Layout>
  )
};

export const homePageQuery = graphql`
query HomeQuery {
  mdx(slug: {eq: ""}) {
    id
    body
    frontmatter {
      title
    }
    slug
    fileAbsolutePath
  }
}
`;
