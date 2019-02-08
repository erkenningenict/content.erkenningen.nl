import React from 'react';
import FaqSidebar from '../components/FaqSidebar';

const NotFoundPage = () => (
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
        <p>Wat jammer, de gezocht pagina bestaat niet. Kies uit het menu een pagina.</p>
      </div>
    </div>
  </div>
);

export default NotFoundPage;
