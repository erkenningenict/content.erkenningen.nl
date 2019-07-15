import React from 'react';
import { ERKENNINGEN_ADMIN_URL } from '@erkenningen/config';
import FaqSidebar from '../components/FaqSidebar';
import Layout from '../components/layout';

const NotFoundPage = () => {
  // Determine if original request was a link to the old site
  // If so, then show warning and add option to redirect to the administration site
  const isOldLink = () => {
    return typeof window !== 'undefined' && window.location.pathname.includes('/Default.aspx');
  };
  const getOldPath = () => {
    return typeof window !== 'undefined' && window.location.pathname + window.location.search;
  };

  return (
    <Layout>
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-1 navbar-be__breadcrumbs-spacer-orange" />
          <div className="col-md-2 navbar-be__breadcrumbs-spacer-green" />
          <div className="col-md-9 navbar-be__breadcrumbs-container">Niet gevonden</div>
        </div>
        <div className="row">
          <div className="col-md-3 pr-5">
            <FaqSidebar />
          </div>
          <div className="col-md-9 pl-0">
            <h1>Pagina niet gevonden</h1>
            <p className="alert alert-warning">
              {isOldLink() ? (
                <>
                  De pagina die u probeerde op te vragen is verhuisd naar de administratiesite van
                  Bureau Erkenningen en is mogelijk niet meer beschikbaar. Klik{' '}
                  <a href={ERKENNINGEN_ADMIN_URL + getOldPath()}>hier</a> om de pagina te openen in
                  de administratiesite of blijf op deze informatiesite. Zorg ervoor dat u uw
                  bladwijzers of favorieten bijwerkt.
                </>
              ) : (
                <>Wat jammer, de gezocht pagina bestaat niet. Kies uit het menu een pagina.</>
              )}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
