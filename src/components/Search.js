import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Search extends Component {
  constructor(props, context) {
    super(props, context);

    this.search = this.search.bind(this);

    this.handleSearchInput = evt => {
      const text = evt.target.value;
      this.search(text);
    };

    this.state = {
      query: '',
      hits: [],
      keywords: [],
    };
  }

  componentDidMount() {
    // Initially perform search if navigation state is set (from navbar search input)
    this.checkNavigationState();
  }

  componentWillReceiveProps() {
    this.checkNavigationState();
  }

  /**
   * Check if a navigate action is set with search state
   */
  checkNavigationState() {
    if (
      window &&
      window.history &&
      window.history.state &&
      window.history.state.search &&
      this.state.query !== window.history.state.search
    ) {
      this.search(window.history.state.search);
      // Clear navigation state
      window.history.state.search = '';
    }
  }

  search(text) {
    const { hits, keywords } = this.getHits(text);
    this.setState(
      s => {
        return {
          ...s,
          hits,
          keywords,
          query: text,
        };
      },
      () => {
        this.props.onSearch(text, hits);
      }
    );
  }

  /**
   * Parse terms from query (using whitespace separator) and add required and wildcard options
   */
  parseTerms(query) {
    const ws = ' ';
    return query
      .split(ws)
      .map(term => '+' + term + '*')
      .join(ws);
  }

  getHits(query) {
    if (!query || !window.__LUNR__) {
      return [];
    }
    const terms = this.parseTerms(query);
    const lunrIndex = window.__LUNR__['en'];
    const results = lunrIndex.index.search(terms);
    const keywords = [];
    const regex = /^[A-Za-z0-9\-]+$/;
    for (const result of results) {
      for (const key of Object.keys(result.matchData.metadata)) {
        // Only add key if it doesn't contain special characters to create a clean list of usable keywords
        if (regex.test(key) && keywords.indexOf(key) === -1) {
          keywords.push(key);
        }
      }
    }

    return {
      keywords: keywords,
      hits: results.map(({ ref, score }) => ({ ...lunrIndex.store[ref], id: ref, score: score })),
    };
  }

  render() {
    const { query, keywords } = this.state;
    return (
      <div role="search" className="searchInputContainer">
        <input
          onChange={this.handleSearchInput}
          placeholder="Zoek op trefwoord"
          className="searchInput"
          type="search"
          value={query}
        />
        {keywords && keywords.length > 1 ? (
          <div className="suggestions">
            Suggesties:
            {keywords.slice(0, 6).map((keyword, index) => (
              <a key={keyword} href="#" onClick={() => this.search(keyword)}>
                {keyword}
                {index < 5 ? ', ' : null}
              </a>
            ))}
          </div>
        ) : null}
      </div>
    );
  }
}

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
