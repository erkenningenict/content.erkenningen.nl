import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledButton = styled(Link)`
  text-decoration: none;
  background: none;
  border: 1px solid #aaa;
  color: #000;
  font-weight: normal;
  font-size: 1.5rem;
  padding: 0.4rem;
  &:hover {
    color: #000;
    box-shadow: 5px 5px 13px -5px rgba(0, 0, 0, 0.23);
    border: 1px solid #000;
  }
`;

class FaqSidebar extends React.Component {
  render() {
    return (
      <div className="faqSidebar--container">
        <p>
          Heeft u een vraag? Kijk dan eens bij de meest gestelde vragen (<Link to="/faq">FAQ</Link>)
        </p>

        <p>
          Of <Link to="/zoeken">zoek</Link> op trefwoorden
        </p>
        <StyledButton to="/faq">FAQ</StyledButton>
        <div className="mt-3">
          <a target="_blank" rel="noopener noreferrer" href="https://administratie.erkenningen.nl">
            &gt; Naar de administratie site
          </a>
        </div>
      </div>
    );
  }
}

export default FaqSidebar;
