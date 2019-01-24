import React from "react";
import Helmet from "react-helmet";

import TextPageBody from "./../components/TextPageBody";
import Layout from "./../components/layout";
import Link from "gatsby-link";
import mol from "../../static/img/1.Mol.jpg";
import graan from "../../static/img/2.Graan.jpg";
import rat from "../../static/img/3.Rat.jpg";
import { graphql } from "gatsby";

export const HomePage = ({ data }) => {
  const page = data.markdownRemark;

  return (
    <Layout>
      <div className="container">
        {page.frontmatter.title && (
          <Helmet>
            <title>Erkenningen | {page.frontmatter.title}</title>
          </Helmet>
        )}

        {page.frontmatter.title && page.frontmatter.excerpt && (
          <Helmet>
            <meta property="og:title" content={page.frontmatter.title} />
            <meta name="twitter:title" content={page.frontmatter.title} />

            <meta
              property="og:description"
              content={page.frontmatter.excerpt}
            />
            <meta
              name="twitter:description"
              content={page.frontmatter.excerpt}
            />
          </Helmet>
        )}

        <div className="row">
          <div className="col p-0">
            <div className="greenContainer">
              <Link to="/licenties">
                <h1>Licenties voor groene en agrarische beroepen</h1>
              </Link>
              <p>
                <Link to="/licenties/wetten-en-regels">
                  Voor het gebruik van professionele chemische middelen bij{" "}
                </Link>
                <Link to="/licenties/welke-licenties-zijn-er/gewasbescherming">
                  gewasbescherming
                </Link>{" "}
                en het bestrijden van{" "}
                <Link to="/licenties/welke-licenties-zijn-er/knaagdierbeheersing">
                  knaagdieren
                </Link>
                ,{" "}
                <Link to="/licenties/welke-licenties-zijn-er/bestrijding-mollen-en-woelratten">
                  mollen en woelratten
                </Link>
                .
              </p>
            </div>
            <div className="imagesContainer">
              <section>
                <Link to="./licenties/welke-licenties-zijn-er/bestrijding-mollen-en-woelratten">
                  <p>Mollen en woelratten</p>
                  <img src={mol} />
                </Link>
              </section>
              <section>
                <Link to="./licenties/welke-licenties-zijn-er/gewasbescherming">
                  <p>Gewasbescherming</p>
                  <img src={graan} />
                </Link>
              </section>
              <section>
                <Link to="./licenties/welke-licenties-zijn-er/knaagdierbeheersing">
                  <p>Knaagdierbeheersing: KBA</p>
                  <img src={rat} />
                </Link>
              </section>
            </div>
            <TextPageBody className="homeButtons" htmlAst={page.htmlAst} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query HomePageQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      fileAbsolutePath
      frontmatter {
        title
      }
    }
  }
`;

export default HomePage;
