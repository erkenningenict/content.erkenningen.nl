import React, { useState, useEffect, useCallback } from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import LoginLink from '../components/LoginLink';

import mol from '../../static/img/1.Mol.jpg';
import graan from '../../static/img/2.Graan.jpg';
import rat from '../../static/img/3.Rat.jpg';
import ReactMarkdown from 'react-markdown';
import LinkButtonContainer from '../components/LinkButtonContainer';
import LinkButton from '../components/LinkButton';
import axios from 'axios';

export default function HomePage() {
  const [newsItems, setNewsItems] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      // filter on archivedDate is null and sort descending on updatedAt (last edited item at the top)
      const response = await axios.get(
        `${process.env.GATSBY_ERKENNINGEN_CONTENT_API_URL}/api/news-items?filters[archivedDate][$null]=true&sort[0]=updatedAt%3Adesc`
      );
      const data = await response.data;
      if (data.error) {
        setHasError(true);
      } else {
        setHasError(false);
      }
      setNewsItems(data);
      setIsLoading(false);
    } catch (error) {
      setHasError(true);
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    const fetcher = async () => {
      await fetchData();
    };
    fetcher();
  }, [fetchData]);

  // const { mdx } = data;
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
                  <p>Knaagdierbeheersing</p>
                  <img src={rat} alt="Knaagdierbeheersing" />
                </Link>
              </section>
            </div>
            <div className="container homeButtons">
              <LinkButtonContainer>
                <LinkButton to="/licenties/licentie-aanvragen">Licentie aanvragen</LinkButton>
                <LinkButton to="/licenties/licentie-verlengen">Licentie verlengen</LinkButton>
                <LinkButton to="/mijn-bureau-erkenningen/duplicaat-pas-aanvragen">
                  Duplicaat pas aanvragen
                </LinkButton>
              </LinkButtonContainer>
              {isLoading && <div>Nieuwsberichten worden geladen...</div>}
              {hasError && <div>Kon nieuws niet ophalen. Probeer het later opnieuw.</div>}
              {newsItems?.data?.map((item) => (
                <div key={item.id} className="news-item-container">
                  <h2>{item.attributes.title}</h2>
                  <ReactMarkdown
                    components={{
                      h1({ children, ...props }) {
                        return <h2 {...props}>{children}</h2>;
                      },
                      img({ ...props }) {
                        return <img {...props} style={{ maxWidth: '100%' }} />;
                      },
                      a({ children, ...props }) {
                        return (
                          <a
                            className="font-bold text-primary-500 underline"
                            target="_blank"
                            {...props}>
                            {children}
                          </a>
                        );
                      },
                      p({ children, ...props }) {
                        return (
                          <p className="mb2" {...props}>
                            {children}
                          </p>
                        );
                      },
                    }}>
                    {item.attributes.content}
                  </ReactMarkdown>
                </div>
              ))}
              {newsItems?.data?.length === 0 && <div>Er is momenteel geen nieuws.</div>}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const homePageQuery = graphql`
  query HomeQuery {
    mdx(slug: { eq: "" }) {
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
