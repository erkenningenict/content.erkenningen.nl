import React from "react";
import Helmet from "react-helmet";

import TextPageBody from "./../components/TextPageBody";
import { classNames } from "classnames";
import Link from "gatsby-link";
import mol from "../../static/img/1.Mol.jpg";
import graan from "../../static/img/2.Graan.jpg";
import rat from "../../static/img/3.Rat.jpg";

export const HomePage = ({ data }) => {
  const page = data.markdownRemark;

  return (
    <div className="container">
      {page.frontmatter.title && (
        <Helmet>
          <title>Erkenningen | {page.frontmatter.title}</title>
        </Helmet>
      )}

      {page.frontmatter.title &&
        page.frontmatter.excerpt && (
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
            <h1>Licenties voor groene agrarische beroepen</h1>
            <p>
              Voor het gebruik van professionele chemische middelen bij
              gewasbescherming en het bestrijden van knaagdieren, mollen en
              woelratten.
            </p>
          </div>
          <div className="imagesContainer">
            <section>
              <Link to="./licenties">
              <p>
                Mollen en woelratten</p>
                <img src={mol} />
              </Link>
            </section>
            <section>
              <Link to="./licenties">
                <p>Gewasbescherming</p>
                <img src={graan} />
              </Link>
            </section>
            <section>
              <Link to="./licenties">
                <p>Knaagdierbeheersing: KBA</p>
                <img src={rat} />
              </Link>
            </section>
          </div>
          <TextPageBody htmlAst={page.htmlAst} />
        </div>
      </div>
    </div>
  );
};

export const query = graphql`
  query HomePageQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      fileAbsolutePath
      frontmatter {
        title
        date
      }
    }
  }
`;

export default HomePage;
